// Define colors
const colors = generateRandomColors(3);

// Select a random color from the colors array as the correct answer
const correctColorIndex = Math.floor(Math.random() * colors.length);
const correctColor = colors[correctColorIndex];
const rgbValueDisplay = document.getElementById('rgb-value');
rgbValueDisplay.textContent = `RGB: ${correctColor}`;

// Create color options
const colorOptionsDiv = document.getElementById('color-options');
colors.forEach((color, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.classList.add('color-option');
    optionDiv.style.backgroundColor = color;
    optionDiv.addEventListener('click', () => checkAnswer(index));
    colorOptionsDiv.appendChild(optionDiv);
});

// Function to check the selected answer
let lives = 3;
function checkAnswer(index) {
    if (index === correctColorIndex) {
        showMessage('Correct!', 'green');
        resetGame();
    } else {
        showMessage('Incorrect! Try again.', 'red');
        lives--;
        if (lives === 0) {
            endGame();
        }
    }
}

// Function to display messages
const messageDiv = document.getElementById('message');
function showMessage(message, color) {
    messageDiv.textContent = message;
    messageDiv.style.color = color;
}

// Function to reset the game
function resetGame() {
    colors.forEach((color, index) => {
        colorOptionsDiv.children[index].removeEventListener('click', checkAnswer);
    });
}

// Function to end the game
function endGame() {
    showMessage(`Game over! Your final score is ${lives}.`, 'black');
    colorOptionsDiv.innerHTML = '';
    document.getElementById('replay-button').style.display = 'block';
}

// Function to generate random colors
function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        arr.push(`rgb(${red}, ${green}, ${blue})`);
    }
    return arr;
}

// Event listener for replay button
document.getElementById('replay-button').addEventListener('click', () => {
    location.reload();
});
