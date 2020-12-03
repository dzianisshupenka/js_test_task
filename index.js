let input = document.getElementById('params');
let check = document.getElementById('letter-case');
let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let output = document.getElementById('output');
let result = [];

async function data () {
    let res = await fetch('https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json');
    let data = await res.json();
    result = data.data;
    output.innerHTML = result;
}

data();

btn1.addEventListener('click', () => {
    let res = result.filter(el => el.length > input.value);
    output.innerHTML = res.join(', ');
})

btn2.addEventListener('click', () => {
    let res = result.filter(el => {
        if (check.checked) {
            return el.includes(input.value);
        } else {
            return el.toLowerCase().includes(input.value.toLowerCase());
        }
    });
    output.innerHTML = res.join(', ');
})
