// const symbols = ['🍒', '🍋', '🔔', '🍊', '⭐', '🍉'];
const symbols = ['🍒', '🍋', '🔔'];


let tg = window.Telegram.WebApp; //получаем объект webapp телеграма

tg.expand(); //расширяем на все окно

//tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
//tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
//tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
//tg.MainButton.show() // показать кнопку
//tg.MainButton.enable() // сделать активной

if (tg.initDataUnsafe.user.username) {
    let username = tg.initDataUnsafe.user.username; // Здесь вы можете установить имя пользователя по умолчанию
}
let balance = 1000; // Здесь вы можете установить начальный баланс


function displayUserInfo() {
    if (username) {
        document.getElementById('username').innerText = username;
    }
    document.getElementById('balance').innerText = "Balance: " + balance;
}

function spin() {
    const reels = document.querySelectorAll('.reel');
    const results = [];
    const animationDuration = 1500; // Total duration for each reel's animation
    const delayBetweenReels = 500; // Delay between each reel's animation

    reels.forEach((reel, index) => {
        const resultIndex = Math.floor(Math.random() * symbols.length);
        results.push(symbols[resultIndex]);

        reel.style.transition = 'none';
        reel.style.transform = 'translateY(0)';

        setTimeout(() => {
            reel.style.transition = 'transform 0.5s ease-out';
            reel.style.transform = 'translateY(200%)';
        }, 0);

        setTimeout(() => {
            reel.innerText = symbols[resultIndex];
            reel.style.transition = 'none';
            reel.style.transform = 'translateY(-200%)';
        }, 700);

        setTimeout(() => {
            reel.style.transition = 'transform 0.5s ease-out';
            reel.style.transform = 'translateY(0)';
        }, 1000 + index * delayBetweenReels);
    });

    const totalAnimationTime = animationDuration + (reels.length - 1) * delayBetweenReels;
    setTimeout(() => {
        const resultElement = document.getElementById('result');
        const isSuccess = results.every(symbol => symbol === results[0]);
        if (isSuccess) {
            resultElement.innerText = `Success! You got +100💵`;
            resultElement.classList.add('success');
            resultElement.classList.remove('failure');
        } else {
            resultElement.innerText = `Failure! Try again`;
            resultElement.classList.add('failure');
            resultElement.classList.remove('success');
        }
    }, totalAnimationTime);
}

function checkWin(symbol1, symbol2, symbol3) {
    const result = document.getElementById('result');
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        result.innerText = 'You win!';
        result.style.color = 'green';
        balance += 100; // Увеличиваем баланс на 100 при выигрыше
        displayUserInfo(); // Обновляем информацию о пользователе
    } else {
        result.innerText = 'Try again!';
        result.style.color = 'red';
        balance -= 10; // Уменьшаем баланс на 10 при проигрыше
        displayUserInfo(); // Обновляем информацию о пользователе
    }
}

// Вызываем функцию displayUserInfo для отображения информации о пользователе при загрузке страницы
displayUserInfo();

