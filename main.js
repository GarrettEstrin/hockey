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

// Blue team player locations

// Blue forward

var blueForward1Location = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,1,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0];

var $blueForward1 = blueForward1Location.indexOf(1);

// Blue defenseman1

var blueDefense1Location = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,1,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0];

var $blueDefense1 = blueDefense1Location.indexOf(1);

// Blue defenseMan2

var blueDefense2Location = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,1,0,0,
  0,0,0,0,0,0,0,0,0,0];

  var $blueDefense2 = blueDefense2Location.indexOf(1);

// Red team player locations

// Red team forward

var redForward1Location = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,1,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0];

var $redForward1 = redForward1Location.indexOf(1);

// Red team defenseman1

var redDefense1Location = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,1,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0];

var $redDefense1 = redDefense1Location.indexOf(1);

// Red team defenseman1

var redDefense2Location = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,1,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0];

var $redDefense2 = redDefense2Location.indexOf(1);


// Player Attributes

var forward = {
  shotFloor: 2,
  shotCeiling: 10,
  skate: 3,
  pass : 2
}

var defense = {
  shotFloor: 2,
  shotCeiling: 7,
  skate: 2,
  pass: 4
}

var goalie = {
  saveFloor: 4,
  saveCeiling: 9
}

// Standalone variables

var $rink = $('#rink');

var saveArray = [];



// Functions
// Function to find puck location
  var findPuck = function(){
    $puck = puckLocation.indexOf(1);
  }
// Function to find BLUE FORWARD location
  var findBlueForward = function(){
    $bF = blueForwardLocation.indexOf(1);
  }
// Function to find RED FORWARD location
  var findredForward = function(){
    $rF = redForwardLocation.indexOf(1);
  }
// Function to move location of puck
  var movePuck = function(location){
    puckLocation[$puck] = 0;
    puckLocation[location] = 1;
    $puck = puckLocation.indexOf(1);
    console.log(puckLocation.indexOf(1));
  }

  // Function to shoot the puck

  // Function to generate shot value
  var generateForwardShotFunc = function(){
    min = Math.ceil(forward.shotFloor);
    max = Math.floor(forward.shotCeiling);
    return saveArray[0] = Math.floor(Math.random() * (max - min)) + min;
  }

  var generateSaveFunc = function(){
    min = Math.ceil(goalie.saveFloor);
    max = Math.floor(goalie.saveCeiling);
    saveArray[1] = Math.floor(Math.random() * (max - min)) + min;
    console.log(saveArray[1]);
    isGoal();
  }

  var isGoal = function(){
    if(saveArray[0] > saveArray[1]){
      console.log("Goal!");
    }else {console.log("Save!")}
    saveArray = [];
  }

// Function to add click event to grid
$rink.on('click', '.grid', function(){
  if($turn){
  $(this).toggleClass('red');
  $turn = false;
  console.log("Red Player at location " + $(this).attr('id'));
}else {
  $(this).toggleClass('blue');
  $turn = true;
  console.log("Blue Player at location " + $(this).attr('id'));
}});




// Testing Section - Remove when testing is complete. If something is here, feature is not complete

var testShot = function(){
  generateForwardShotFunc();
  generateSaveFunc();
}
