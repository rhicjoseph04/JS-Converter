import './css/index.css';


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
        num4.value = parseFloat(num3.value * 9/5) + 32;
     
    } else if (num3.value === '') {
       num3.value = (parseFloat(num4.value - 32) * 5/9).toFixed(2);
       
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

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});