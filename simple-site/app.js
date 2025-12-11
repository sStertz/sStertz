'use strict';
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('DarkTheme');
    document.body.classList.toggle('LightTheme');

    const troca = document.body.troca;
    if(troca == 'LightTheme'){
        this.textContent = 'Dark';
    } else { 
        this.textContent = 'Light';
    }

    console.log('troca' + troca);
});