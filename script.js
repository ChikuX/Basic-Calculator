let string = document.getElementById('userInput');
let button = document.querySelectorAll('button');

let value = '';

let arr = Array.from(button);
arr.forEach((element) => {
    element.addEventListener('click', (e) => {
        let text = e.target.innerText;
        if (text === 'AC') {
            value = '';
            string.value = value;
        } else if (text === '=') {
            string.value = eval(value);
        }
        else if (text === 'DEL') {
            value = value.substring(0, value.length - 1);
            string.value = value;
        } else {
            value += text;
            string.value = value;
        }
    });
});