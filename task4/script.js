out.addEventListener('click', function (event) { 
    event.preventDefault(); 
    const tText = prompt('Введите текст', 'Не жми отмену даже не думай!!!!'); 
    const word = document.querySelector('#out');
    if(tText === null || tText === "") {
        alert('Введи текст, полчаса убил на кнопку отмены что бы догадаться что можно сделать так!!!!! Если не сложно пропишите как можно сделать сразу выводом в word у меня так и не получилось. Хотелось бы также знать как в prompt поставить ограничение на ввод символов')
        return
    }
    word.textContent = tText;
    word.style.color = ('white')
    word.style.textShadow = ('0 0 10px red')
})


