// Custom JavaScript by Garrett Estrin | GarrettEstrin.com

// Element location trackers and their respective variables

$turn = false;

var puckLocation = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,1,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0];

var $puck = puckLocation.indexOf(1);

var oFLocation = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,1,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0];

var $bF = oFLocation.indexOf(1);

var rFLocation = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,1,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0];

var $rF = rFLocation.indexOf(1);

// Standalone variables

var $rink = $('#rink');

// Functions
// Function to find puck location
  var findPuck = function(){
    $puck = puckLocation.indexOf(1);
  }
// Function to find RED FORWARD location
  var findoF = function(){
    $bF = bFLocation.indexOf(1);
  }
// Function to find BLUE FORWARD location
  var findrF = function(){
    $rF = rFLocation.indexOf(1);
  }
// Function to move location of puck
  var movePuck = function(location){
    puckLocation[$puck] = 0;
    puckLocation[location] = 1;
    $puck = puckLocation.indexOf(1);
    console.log(puckLocation.indexOf(1));
  }

// Function to add click event to grid
$rink.on('click', '.grid', function(){
  if($turn){
  $(this).toggleClass('red');
  $turn = false;
  console.log("Red Player at location " + $(this).attr('id'));
}else {
  $(this).toggleClass('orange');
  $turn = true;
  console.log("Orange Player at location " + $(this).attr('id'));
}});
