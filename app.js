const choices = ['rock', 'paper', 'scissors'];
const choiceImages = {
    rock: './images/rock.png',
    paper: './images/paper.png',
    scissors: 'images/scissors.png'
};

const choiceImagesComputer = {
    rock: '/images/rock-comp.png',
    paper: '/images/paper-comp.png',
    scissors: '/images/scissors-comp.png'
};

let wins = 0, losses = 0, draws = 0;

document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', () => {
    const playerChoice = choice.dataset.choice;
    playGame(playerChoice);
    });
});

document.getElementById('play-again').addEventListener('click', () => {
    document.getElementById('selection-screen').classList.remove('hidden');
    document.getElementById('result-screen').classList.add('hidden');
});

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    document.getElementById('selection-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    const playerHand = document.getElementById('player-hand');
    const computerHand = document.getElementById('computer-hand');
    
    playerHand.classList.add('shake');
    computerHand.classList.add('shake');
    playerHand.src = choiceImages.rock;
    computerHand.src = choiceImagesComputer.rock;
    
    setTimeout(() => {
    playerHand.src = choiceImages[playerChoice];
    computerHand.src = choiceImagesComputer[computerChoice];
    playerHand.classList.remove('shake');
    computerHand.classList.remove('shake');
    
    const result = getResult(playerChoice, computerChoice);
    displayResult(result);
    updateScore(result);
    }, 1800);
}

function getResult(player, computer) {
    if (player === computer) return 'draw';
    if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
    ) {
    return 'win';
    }
    return 'lose';
}

function displayResult(result) {
    const resultText = document.getElementById('result-text');
    if (result === 'win') {
    resultText.textContent = 'Congrats, You Won!';
    } else if (result === 'lose') {
    resultText.textContent = 'Sorry, You Lost!';
    } else {
    resultText.textContent = "It's a Draw!";
    }
}

function updateScore(result) {
    if (result === 'win') wins++;
    else if (result === 'lose') losses++;
    else draws++;
    
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('draws').textContent = draws;
}