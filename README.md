# Monstor Shootout
## By Rupinder Singh Lall

Monstor shootout, a shooting game made with HTML, CSS and Javascript. Monstor Shootout is a fun and addictive game that requires a single player to click on the moving monstor on the screen. A good time pass game that can be played with friends and family turn by turn to see who can get the most hits in the given time.

## How to play

The game is fairly straigh forward to play. When the game is loaded, the player will come across a screen that provides them with the instructions for the game and a play button which allows the user to go into the game.

When the player is into the game, he/she will be provided with a GUI at the top of their screen. The button in the top right allows the user to restart the game if they feel that they did not play too well throughout the game. In the top left of the screen, there is a timer which counts downwards from 30 seconds and a score tracker which increments by 1 everytime the player hits the monster. Once the timer reaches 0, the player will no longer be able to shoot, the final score will be printed and a message will appear on their screen saying "GAME OVER". 

How do you hit the monster? Simply just aim for the monster with your cursor and click when you are on him. Be Careful though, the monster does move fast.

## Development Process

The development of this game began with creating a click event listener where the monster waits for it to be clicked on. To make the monster respawn in a random position everytime, the **Math.random()** function was used. The animation of the monster moving left to right and rotating was done in CSS, however the monster changes its size by creating an **if** statement that checks whether the users score has reached to a particular level.

## Rules

* The player has 30 seconds. 
* 1 point is given for every click you get on the monster.


## Future Development 

Future development would consist of having another div appearing on the screen similar to the monster, however this will finish the game their and then as it means you killed yourself. It would also consist of having a way to track the highest score. Another feature that I would have is, if you did not click the monster in a certain period of time, you would get hit and you would also have 3 lives.