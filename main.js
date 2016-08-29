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

// Red team = [0], blue team = [1];
var faceOffArray = [];

// Move Array
var possibleMoves = [];



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

  // Function to generate shot values - forward and defense
  var generateForwardShotFunc = function(){
    var min = Math.ceil(forward.shotFloor);
    var max = Math.floor(forward.shotCeiling);
    return saveArray[0] = Math.floor(Math.random() * (max - min)) + min;
  }

  var generateDefenseShotFunc = function(){
    var min = Math.ceil(defense.shotFloor);
     var max = Math.floor(defense.shotCeiling);
    return saveArray[0] = Math.floor(Math.random() * (max - min)) + min;
  }
// Function to generate goalie save value
  var generateSaveFunc = function(){
    var min = Math.ceil(goalie.saveFloor);
    var max = Math.floor(goalie.saveCeiling);
    saveArray[1] = Math.floor(Math.random() * (max - min)) + min;
    console.log(saveArray[1]);
    isGoal();
  }
// Function to evaluate goal
  var isGoal = function(){
    if(saveArray[0] > saveArray[1]){
      console.log("Goal!");
    }else {console.log("Save!")}
    saveArray = [];
  }

// Function to generate roll for RED TEAM faceoff
var redTeamFaceOff = function(){
  faceOffArray[0] = Math.random();
  readyForFaceOff();
}
// Function to generate roll for BLUE TEAM faceoff
var blueTeamFaceOff = function(){
  faceOffArray[1] = Math.random();
  readyForFaceOff();
}

  // Function to decide faceoffs
  var faceOffFunc = function(){
    if(faceOffArray[0] > faceOffArray[1]){
      console.log('Red Team Wins Faceoff!')
    }else {console.log('Blue Team Wins Faceoff!')}
    faceOffArray = [];
  }

  // Function to check if there are two values in faceOffArray
var readyForFaceOff = function(){
  if(faceOffArray.length === 2){
    faceOffFunc();
  } else {console.log('Not ready for faceoff')}
}

  // Move Functions
  // Function to populate array with possible moves

// var possibleMovesForwardFunc = function(grid){
//   possibleMoves[0] = grid - 20;
//   possibleMoves[1] = grid - 11;
//   possibleMoves[2] = grid - 10;
//   possibleMoves[3] = grid - 9
//   possibleMoves[4] = grid - 2;
//   possibleMoves[5] = grid - 1;
//   possibleMoves[6] = grid;
//   possibleMoves[7] = grid + 1;
//   possibleMoves[8] = grid + 2;
//   possibleMoves[9] = grid + 9;
//   possibleMoves[10] = grid + 10,
//   possibleMoves[11] = grid + 11;
//   possibleMoves[12] = grid + 20;
//   return possibleMoves;
// }

var possibleMovesForwardFunc = function(grid){
  if((grid - 20) > -1 && (grid - 20) < 50){
    possibleMoves.push(grid - 20)
  } else {
    // do nothing
  };
  if((grid - 11) > -1 && (grid -11) < 49){
    possibleMoves.push(grid - 11)
  } else {
    // do nothing
  };
  if((grid - 10) > -1 && (grid -10) < 49){
    possibleMoves.push(grid - 10)
  } else {
    // do nothing
  };
  if((grid - 9) > -1 && (grid - 9) < 49){
    possibleMoves.push(grid - 9)
  } else {
    // do nothing
  };
  if((grid - 2) > -1 && (grid - 2) < 49){
    possibleMoves.push(grid - 2)
  } else {
    // do nothing
  };
  if((grid - 1) > -1 && (grid - 1) < 49){
    possibleMoves.push(grid - 1)
  } else {
    // do nothing
  };
  if((grid - 0) > -1 && (grid - 0) < 49){
    possibleMoves.push(grid - 0)
  } else {
    // do nothing
  };
  if((grid + 1) > -1 && (grid + 1) < 49){
    possibleMoves.push(grid + 1)
  } else {
    // do nothing
  };
  if((grid + 2) > -1 && (grid + 2) < 49){
    possibleMoves.push(grid + 2)
  } else {
    // do nothing
  };
  if((grid + 9) > -1 && (grid + 9) < 49){
    possibleMoves.push(grid + 9)
  } else {
    // do nothing
  };
  if((grid + 10) > -1 && (grid + 10) < 49){
    possibleMoves.push(grid + 10)
  } else {
    // do nothing
  };
  if((grid + 11) > -1 && (grid + 11) < 49){
    possibleMoves.push(grid + 11)
  } else {
    // do nothing
  };
  if((grid + 20) > -1 && (grid + 20) < 49){
    possibleMoves.push(grid + 20)
  } else {
    // do nothing
  };
// end of possibleMovesForwardFunc
return possibleMoves;
}

// Function to highlight move space

// Function to add click event to grid
// $rink.on('click', '.grid', function(){
//   if($turn){
//   $(this).toggleClass('red');
//   $turn = false;
//   // console.log("Red Player at location " + $(this).attr('id'));
// }else {
//   $(this).toggleClass('blue');
//   $turn = true;
//   // console.log("Blue Player at location " + $(this).attr('id'));
// }});

// function to show possible moves when a square is clicked




// Testing Section - Remove when testing is complete. If something is here, feature is not complete

var testFaceOff = function(){
  redTeamFaceOff();
  blueTeamFaceOff();
}
