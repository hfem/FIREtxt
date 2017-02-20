#!/usr/bin/perl
# creates json file on ; separated text file 
# command line: perl scsv2json.pl user_name input_file1 input_file2 > output.json

use strict;
use warnings;
 
my $username = $ARGV[0] or die "specify user's name as argument 1\n";
my $friendname = "default";
my $f = 1;
#my $file = $ARGV[$f] or die "specify file name as argument 0\n";

my $tab = "    ";
my $preview = "message";
my $p_time = "11pm"; #not used rn
my %days = (0=>"Sunday",
            1=>"Monday", 
            2=>"Tuesday", 
            3=>"Wednesday",
            4=>"Thursday",
            5=>"Friday",
            6=>"Saturday");
my $newday = 0;
my $day_curr = 0;
my $day_flag = 0;
my $comma = 0;


print "[\n";
    
while(my $file = $ARGV[$f])
{
    open(my $data, '<', $file) or die "Could not open '$file' $!\n";
    $friendname = "default";
    $f +=1;

    # begin json
    if($comma){
        print ",\n";
        $comma = 0;
    }
    $day_flag = 0;
    print "  {\"data\":";
    print "{\n  $tab\"history\":[\n";
    print "  $tab  {\"day\":\"$days{$day_curr}\",\n";
    print "  $tab  \"conversation\":[\n";

    while (my $line = <$data>) {
      chomp $line;
     
      my @fields = split ";" , $line;
      
      # just update newday if empty line
      # input files do not start with empty lines
      $newday = @fields;
      if($newday != 3){
        $day_curr = ($day_curr + 1) % 7;
        $day_flag = 1;
        next;
      }
      # begin new day formatting
      if($day_flag){
        $day_flag = 0;
        $comma = 0;
        print "\n  $tab$tab]\n";
        print "  $tab  },\n";
        print "  $tab  {\"day\":\"$days{$day_curr}\",\n";
        print "  $tab  \"conversation\":[\n";
      }
      # if previous entry in list add a comma
      if($comma){
        print ",\n";
      }
      $comma = 1;
      # assign the friend's name
      if($friendname eq "default"){
        if($username ne $fields[0]){
            $friendname = $fields[0];
        }
      }

      # who sent message
      if($username eq $fields[0]){
            print "  $tab$tab\{\"status\":\"received\",\n";
      }
      else{
            print "  $tab$tab\{\"status\":\"sent\",\n";
      }

      print "  $tab$tab\"timestamp\":\"$fields[2]\",\n";
      print "  $tab$tab\"message\":\"$fields[1]\"}";
      # saving last messages
      $preview = $fields[1];
      $p_time = $fields[2];
    }

    print "\n"; 
    print "  $tab$tab]\n"; # closes conversation
    print "  $tab  }\n";   # closes day
    print "  $tab],\n";    # closes history
    print "  $tab\"preview\":\"$preview\",\n";
    print "  $tab\"timestamp\":\"$p_time\"\n";
    print "  },\n";         # closes data

    print "  \"name\":\"$friendname\"\n";
    print "  }";
    $comma = 1;
}

print "\n]";
    
