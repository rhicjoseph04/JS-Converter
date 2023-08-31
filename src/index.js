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

const celsiusToFahrenheit = document.getElementById('celsiusToFahrenheit');

celsiusToFahrenheit.addEventListener('click', () => {
    let num3 = document.getElementById('num3');
    let num4 = document.getElementById('num4');
    
    
 if (num4.value === '') {
        num4.value = parseFloat(num3.value)* 9/5 + 32;
     
    } else if (num3.value === '') {
       num3.value = (parseFloat(num4.value)/ 9/5  + 32).toFixed(2);
       
    }
});

const milesToKilometers = document.getElementById('milesToKilometers');

milesToKilometers.addEventListener('click', () => {
    let num5 = document.getElementById('num5');
    let num6 = document.getElementById('num6');
    
    
 if (num6.value === '') {
        num6.value = parseFloat(num5.value) * 1.60934;
     
    } else if (num5.value === '') {
       num5.value = (parseFloat(num6.value) / 1.60934).toFixed(2);
       
    }
});

const poundsToKilograms = document.getElementById('poundsToKilograms');

poundsToKilograms.addEventListener('click', () => {
    let num7 = document.getElementById('num7');
    let num8 = document.getElementById('num8');
    
    
 if (num8.value === '') {
        num8.value = parseFloat(num7.value) * 0.453592;
     
    } else if (num7.value === '') {
       num7.value = (parseFloat(num8.value) / 0.453592).toFixed(2);
       
    }
});

const inchesToCentimeters = document.getElementById('inchesToCentimeters');

inchesToCentimeters.addEventListener('click', () => {
    let num9 = document.getElementById('num9');
    let num10 = document.getElementById('num10');
    
    
 if (num10.value === '') {
        num10.value = parseFloat(num9.value) * 2.54;
     
    } else if (num9.value === '') {
       num9.value = (parseFloat(num10.value) / 2.54).toFixed(2);
       
    }
});

const gallonsToLiters = document.getElementById('gallonsToLiters');

gallonsToLiters.addEventListener('click', () => {
    let num11 = document.getElementById('num11');
    let num12 = document.getElementById('num12');
    
    
 if (num12.value === '') {
        num12.value = parseFloat(num11.value) * 3.78541;
     
    } else if (num11.value === '') {
       num11.value = (parseFloat(num12.value) / 3.78541).toFixed(2);
       
    }
});