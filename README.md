#Hockey!

### Javasctip-based, turn based hockey game

A two player competitive strategy game, where users alternate turns, performing actions such as shooting, skating, passing and saving with the success of these actions based on number rolls in ranges unique to each type of hockey player.
Game ends when each user has taken 30 turns or one user scores 5 goals.

<!-- Put picture here of gameplay -->

### Controls

Users control is entirely click based.  Each user will have their own control center that changes dynamically based on their options.
In this control center available actions will appear when appropriate and will be replaced with a roll image to indicate a number needs to be rolled.

## To Play

Visit http://garrettestrin.github.io/hockey/ to play, or download a .zip of this repo and open index.html in your browser.

### Development process

Technologies used: HTML / CSS / Javscript + jQuery

All player and puck tracking is done with arrays in Javascript set to the size of the rink, with "0" representing where an element is not and "1" representing where an element is.  Functions are used based on user actions to "move" the "1" value around the array to indicate position of element.  Elements include the puck, team forwards and defensemen.  Arrays also exist to store player attributes such as the range that a player gets to roll in to determine how effective an action is.  The game is able to be played completely from the console without visual representation.
With this implementation, the amount of players per team can be easily expanded and rules and attributes can be adjusted to tweak gameplay.
HTML and CSS are used to create the visual representation and to give users a clean interface to interact with.

## User Stories

As a user, I interact with the game with a visually pleasing and simple UI.
As a user, I can pick up and play a simple game that is difficult to master.

## Future implementations

Everything...

## Feature Wish List

* Player animations
* Landing Screen
* Network play
