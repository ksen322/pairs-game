# pairs-game  
Creating pairs game  
I used html for layout, css for styles and JavaScript  
Also I used library <a href = 'https://animate.style/'>Animate.css v4</a> for animation of cards  
## createNumnbersArray  
This function creates an array of numbers used in pairs game  
It takes one argument count which scpecifies count of numbers to be added in array   
Inside the function an empty array pairsCards is created which contain the numbers of paired cards  
## shuffle  
This function shuffles the created array of paired cards. It takes one argument - created array of paired cards  
## createdCard  
This function creates an HTML card element for the game that matches the number and size passed in.  
It takes two arguments:
* number - the number that will be displayed on the card
* cardSize - card size in pixels

Here the width and height of the card are set using the style.width and style.height properties, which receive the value ${cardSize}px.  
${cardSize}px is a string that will be interpolated using a template string to insert the value of the cardSize variable in pixels.  
Content is created inside the card using the innerHTML property. This content consists of two child divs: card-front and card-back.   
* card-front represents the front side of the card
* card-back usually represents the back side.

${number} is the string that will be interpolated to insert the value of the number variable as text inside the card-back element.  
Add a "click" event handler to the card using the addEventListener() method. When the card is clicked, the __flipCard__ function will be called  
## createBoardSize  
This function creates a board with cards based on the specified size.  
It takes one argument - size, which specifies the number of cards in each field dimension (for example, if size=4 then will create a 4x4 field).  
##  flipCard  
This function processes a click on a card and flips the card.  
It takes one argument - card, which represents the card element that was clicked.  
## checkMatch  
This function checks two temporarily open cards for matching values.  
The following actions are performed inside the function:
1. Destructure the openedCards array into the card1 and card2 variables using the destructuring syntax [card1, card2] = openedCards.
    - The variables card1 and card2 correspond to the first and second open card, respectively.
2. The condition is checked that the text values (innerText) of cards card1 and card2 match.
    - If the text values ​​match, this means that the open cards match and these cards remain open until the end of the game
    - If the text values do not match, it means that the open cards do not match and you need to return them to the closed position.

## checkEndGame  
The function checks if all the cards have been matched.  
## startGame  
It is the main function  
1. First, it prompts the user to enter a value for the timer using let timerLimit = prompt('Введите значение таймера').  
The user's input is stored in the variable timerLimit. If the user leaves the input empty or cancels the prompt, timerLimit is set to 60.  
2. Next, it prompts the user to enter the size of the board (number of rows and columns) using const size = parseInt(prompt("Введите кол-во строчек по вертикали/горизонтали")).  
The user's input is converted to an integer using parseInt and stored in the constant size. If the size is not an even number, less than 2, greater than 10, or if the prompt is cancelled, a default size of 4 is passed to the __createBoard__ function.  
3. The __createBoard__ function is called with the size parameter to generate a new game board.  
4. Next, it selects all the cards on the board using document.querySelectorAll('.card') and stores them in the cardsArr variable.  
It also initializes an empty array called openedCards.  
5. If there is an ongoing timer (stored in the variable timer), it is cleared using clearInterval(timer).  
6. A variable timeLeft is set to timerLimit to keep track of the remaining time.
7. The function sets up an interval timer with setInterval that executes a callback function every second.  
Inside the callback function, timeLeft is decremented by 1. The value of timeLeft is then displayed in an element with the ID timer using document.getElementById('timer').innerText = time left: ${timeLeft}.  
If timeLeft reaches 0, the interval timer is cleared using clearInterval(timer). An alert box is displayed with the message 'time left!'.  
8. Finally, it asks the user if they want to play again using const playAgain = confirm('play again?'). 
If the user chooses to play again, the __startGame__ function is called recursively to start a new game.

And <a href = 'https://pairs-game-ksen.netlify.app/'> ___how it looks like___ </a>
