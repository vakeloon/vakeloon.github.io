const symbols = ['🍒', '🍋', '🔔', '🍊', '⭐', '🍉'];

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');

    let count = 10;
    const interval = setInterval(() => {
        reel1.innerText = getRandomSymbol();
        reel2.innerText = getRandomSymbol();
        reel3.innerText = getRandomSymbol();
        count--;
        if (count === 0) {
            clearInterval(interval);
            checkWin(reel1.innerText, reel2.innerText, reel3.innerText);
        }
    }, 100);
}

function checkWin(symbol1, symbol2, symbol3) {
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        alert('You win!');
    } else {
        alert('Try again!');
    }
}
