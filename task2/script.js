const consoleLog = document.querySelector('#consoleLog');
const aAlert = document.querySelector('#alert');
const pPrompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

aAlert.addEventListener('click', () => {
    alert('Служит для отображения информации пользователям. Показывает диалоговое окно (как это) с сообщением и кнопкой OK.');
})

pPrompt.addEventListener('click', () => {
    alert('Служит для ввода пользователем текста в консоль, но текст на странице не изменяется');
})