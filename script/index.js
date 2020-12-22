// Структура документу: 
// 1. Імпорти 
// 2. Об'ява змінних 
// 3. Функції 
// 4. Обробники подій 
// 5. Виклик функції 

"use strict"
import {
    radioPlayerInit
} from './radioPlayer.js';
import {
    videoPlayerInit
} from './videoPlayer.js';
import {
    musicPlayerInit
} from './musicPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn'),
    playerBlock = document.querySelectorAll('.player-block'),
    tmep = document.querySelector('.temp');


    const deactivationPlayer = () => {
        tmep.style.display = 'none';
        playerBtn.forEach( item => item.classList.remove('active'));
        playerBlock.forEach( item => item.classList.remove('active'));
    };


playerBtn.forEach((btn, index) => {
    console.log(btn);
    console.log(playerBlock[index]);
    btn.addEventListener('click', (x) => { 
        deactivationPlayer();
         btn.classList.add('active');
         playerBlock[index].classList.add('active');
    })
});
console.log('playerBtn: ', playerBtn);
console.log('playerBtn: ', playerBlock);