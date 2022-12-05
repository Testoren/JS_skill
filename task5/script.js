const input = document.querySelector('input') 
const button = document.querySelector('button') 
const duplicateField = document.querySelector('#duplicateField') 

input.addEventListener('input', function (event) {
    event.preventDefault();
    duplicateField.textContent = input.value;
    duplicateField.style.color = ('white')
    duplicateField.style.textShadow = ('3px 5px 5px Yellow')
})

button.addEventListener('click', function (event) {
    console.log(input.value)
    input.value = "";
    duplicateField.textContent = "";
})