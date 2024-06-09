// const symbols = ['🍒', '🍋', '🔔', '🍊', '⭐', '🍉'];
const symbols = ['🍒', '🍋', '🔔'];


let tg = window.Telegram.WebApp; //получаем объект webapp телеграма

tg.expand(); //расширяем на все окно

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

let username = "vakeloon"; // Здесь вы можете установить имя пользователя по умолчанию
let balance = 1000; // Здесь вы можете установить начальный баланс

function displayUserInfo() {
    document.getElementById('username').innerText = username;
    document.getElementById('balance').innerText = "Balance: " + balance;
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const result = document.getElementById('result');

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

