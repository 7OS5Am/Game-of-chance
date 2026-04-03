let oan = document.getElementById('oan');
let tow = document.getElementById('tow');
let three = document.getElementById('three');
let forr = document.getElementById('for');
let five = document.getElementById('faive');
let btn = document.querySelectorAll('button');
let text = document.getElementById('contact');
let num = Math.floor(Math.random() * 5);
let num2 = Math.floor(Math.random() * 5);
let num3 = Math.floor(Math.random() * 5);
let num4 = Math.floor(Math.random() * 5);
console.log(num, num2,num3,num4);


function Apple1(el, add, remove) {
    if (el == num || el == num2 || el == num3 ||el == num4 ) {
        num = Math.floor(Math.random() * 5);
        num2 = Math.floor(Math.random() * 5);
        num3 = Math.floor(Math.random() * 5);
        add.classList.add('disabled');
        remove.classList.remove('disabled');
        console.log(num, num2,num3,num4);
    } else {
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.background = '#ff0000'
            btn[i].style.color = '#006400'
            btn[i].classList.add('disabled')
        }
        setInterval(() => {
            text.textContent += ".";

        }, 700)
        setTimeout(() => {
            location.reload();
        }, 2000)
    }



}


function Apple2(el) {

    if (el == num || el == num2 || el == num3 ||el == num4) {
        for (let i = 0; i < btn.length; i++){
            btn[i].style.background = '#006400'
            btn[i].style.color = '#ff0000'
        }
        text.textContent = 'Win';
        setInterval(() => {
            text.textContent += '.';
        }, 700)
        text.style.color = 'green';
        setTimeout(() => {
            location.reload();
        }, 2000);
    } else {
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.background = '#ff0000'
            btn[i].style.color = '#006400'
            btn[i].classList.add('disabled')
        }
        setInterval(() => {
            text.textContent += ".";

        }, 700)
        setTimeout(() => {
            location.reload();
        }, 2000)

    }
}



