import './css/style.css';

const kilogramsToGrams = document.getElementById('gTokg');

kilogramsToGrams.addEventListener('click', () => {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    
    
 if (num2.value === '') {
        num2.value = parseFloat(num1.value) / 1000;
     
    } else if (num1.value === '') {
       num1.value = (parseFloat(num2.value) * 1000).toFixed(2);
       
    }
});