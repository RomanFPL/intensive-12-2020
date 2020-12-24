"use strict";
export const radioPlayerInit = () => {

    const radio = document.querySelector('.radio'),
        radioCoverImg = document.querySelector('.radio-cover__img'),
        radioHeaderBig = document.querySelector('.radio-header__big'),
        radioNavigation = document.querySelector('.radio-navigation'),
        radioItem = document.querySelectorAll('.radio-item'),
        radioStop = document.querySelector('.radio-stop');

    //Працюємо з конструктором аудіо. 
    const audio = new Audio();
    audio.type = 'audio/aac';
    // код нижче додасть до html тега атрибут disabled, і зробить його сірим. Це можна реалізувати на прмяу в  html
    radioStop.disabled = true;

    const changeIconPlay = () => {
        if (audio.paused) {
            // клас плей додає цс с стилі для обертання пластинки   
            radio.classList.remove('play');
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        } else {
            radioStop.classList.add('fa-stop');
            radioStop.classList.remove('fa-play');
            radio.classList.add('play');
        }
    }

    const selectItem = (elem) => {
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');
    }

    radioNavigation.addEventListener('change', (event) => {
        const target = event.target;
        // closest підімається по дом дереву і шукає клас у кожному наступному посліновно. Якщо не знаходить поверне 0
        const parrent = target.closest('.radio-item'); 
        selectItem(parrent);

        const title = parrent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title;

        const urlImg = parrent.querySelector('.radio-img').src;
        radioCoverImg.src = urlImg;
        

        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay();
    })


    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            changeIconPlay();
        } else {
            audio.pause();
        }
        changeIconPlay();
    })



};