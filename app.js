let displayString = '', num1 = 0,num2 = 0,operator = '', ans = 0;
const onButton = document.getElementById('on-button'), displayOperator = document.getElementById('operator'), answerButton = document.getElementById('ans-button'), operators = document.querySelectorAll('#plus-button, #minus-button, #mul--button, #div--button') , displayNumberShow = document.getElementsByClassName('digits'),numbers = document.querySelectorAll('#number--One, #number--Two, #number--Three, #number--Four, #number--Five, #number--Six, #number--Seven, #number--Eight, #number--Nine, #number--Zero,#dot--button');


//------Number Clicking Function-------------
const numbersClicked = (e) => {
    console.log(e.target.getAttribute('data-value'));
    displayString = displayString + e.target.getAttribute('data-value')
    displayNumberShow[0].textContent = displayString;
    displayOperator.textContent = operator;
}
numbers.forEach(item => {
    item.addEventListener('click',numbersClicked);
})
//----END - Of Number Clicking Function---------------






//-----------Operator Showing Function-----------------
const operatorsClicked = (e) => {
    num1 = parseFloat(displayString);
    displayString = '';
    operator = e.target.getAttribute('data-operator');
    displayOperator.textContent = operator;
    console.log(`num1 = ${num1} ${operator}`);
}
operators.forEach(item => {
    item.addEventListener('click',operatorsClicked);
})
// END of Operator showing FUNCTION------------------




//--------------Answer Showing Functions--------------
const answerFunc = (e) => {
    if (operator == '') return;
    num2 = parseFloat(displayString);
    console.log(`num2 = ${num2}`);
    displayString = '';
    console.log(operator);
    if(operator == '+'){
        ans = num1 + num2;
    }else if(operator == '-'){
        ans = num1 - num2;
    }else if(operator == 'x'){
        ans = num1 * num2;
    }else if(operator == '/'){
        ans = num1 / num2;
    }
    console.log(`${num1},${num2},${ans}`)
    displayNumberShow[0].textContent = ans ;
    displayOperator.textContent = '=';
    operator = '';
    num1 = 0;
    num2 = 0;
}
answerButton.addEventListener('click',answerFunc);
//------END Of Answer Showing Function-----




//--------------------------
//-----------Design Section
const buttons = document.querySelectorAll('.button');
buttons.forEach( item => {
    item.addEventListener('click', (e) => {
        const button = e.target;
        button.classList.add('clicked');
    })

    item.addEventListener('transitionend', (e) => {
        e.target.classList.remove('clicked')
    })
})

//---------On Button Functionality

onButton.addEventListener('click',(e) =>{
    console.log('Clicked on ON button')
    if(e.target.textContent == 'ON'){
        e.target.textContent = 'Off';
        e.target.style.backgroundColor = '#16a3fc';
        e.target.style.color= '#002a42';
        displayNumberShow[0].textContent  = '0';
        displayNumberShow[0].style.display = 'block';
        displayOperator.style.display = 'block';
        displayOperator.textContent = '';
        console.log(displayNumberShow);
    }else if(e.target.textContent == 'Off'){
        e.target.textContent = 'ON';
        e.target.style.backgroundColor = '#357031';
        e.target.style.color= '#ffffff';
        displayNumberShow[0].style.display = 'none';
        displayOperator.style.display = 'none';
        operator = '';
        displayString = '';
    }
})



//Clear Button---
const clrBtn = document.getElementById('clear-button');
clrBtn.addEventListener('click', (e) =>{
    displayString = '';
    num1 = 0;
    num2 = 0;
    operator = '';
    displayNumberShow[0].textContent  = '0';
    displayOperator.textContent = '';
})
