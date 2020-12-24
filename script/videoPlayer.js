"use strict";
export const videoPlayerInit = () => {


// video-player
// video-button__play
// video-button__stop
// video-time__passed
// video-progress
// video-time__total

const videoPlayer = document.querySelector('.video-player'),
    videoButtonPlay = document.querySelector('.video-button__play'),
    videoButtonStop = document.querySelector('.video-button__stop'),
    videoTimePassed = document.querySelector('.video-time__passed'),
    videoProgress = document.querySelector('.video-progress'),
    videoTimeTotal = document.querySelector('.video-time__total'),
    videoVolume = document.querySelector('.video-volume'),
    volumeDown = document.querySelector('.volumeDown'),
    volumeUp = document.querySelector('.volumeUp'),
    videoFullscreen = document.querySelector('.sizeUp');

    let saveCV = videoVolume.value;
    

const toggleIcon = () => {
    if (videoPlayer.paused) {
        videoButtonPlay.classList.remove('fa-pause');
        videoButtonPlay.classList.add('fa-play');
    } else {
        videoButtonPlay.classList.remove('fa-play');
        videoButtonPlay.classList.add('fa-pause');

    }
}

const togglePlay = (e) => {
    e.preventDefault();
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
    toggleIcon();
}

const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

const addZero = n => n < 10 ? '0' + n : n;

const changeVolume = () => {
    const valuerVolume = videoVolume.value;
    videoPlayer.volume = valuerVolume / 100;
    saveCV = videoVolume.value;
};

const toZeroValue = () => {
    if (videoVolume.value == 0) {
        videoVolume.value = saveCV;
        videoPlayer.volume = saveCV / 100;
        volumeDown.classList.add('fa-volume-down');
        volumeDown.classList.remove('fa-times-circle-o');
    } else {
        videoVolume.value = 0;
        videoPlayer.volume = 0;
        volumeDown.classList.add('fa-times-circle-o');
        volumeDown.classList.remove('fa-volume-down');
    }
};
const toMaxValue = () => {
    if (videoVolume.value == 100) {
        videoVolume.value = saveCV;
        videoPlayer.volume = saveCV / 100;
    } else {
        videoVolume.value = 100;
        videoPlayer.volume = 1;
    }
}



videoPlayer.addEventListener('click', togglePlay);
videoButtonPlay.addEventListener('click', togglePlay);


// Інший спосіб активації при кліку
// videoPlayer.addEventListener('play', togglePlay);
// videoButtonPlay.addEventListener('pause', togglePlay);


videoButtonStop.addEventListener('click', stopPlay);

videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;
    videoProgress.value = (currentTime / duration) * 100;
    let minutePassed = Math.floor(currentTime / 60);
    let secondsPassed = Math.floor(currentTime % 60)
    let minuteTotal = Math.floor(duration / 60);
    let secondsTotal = Math.floor(duration % 60);

    videoTimePassed.textContent = addZero(minutePassed) + ':' + addZero(secondsPassed);
    // videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondsTotal);
    videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;
});

videoProgress.addEventListener('input', () => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;
    videoPlayer.currentTime = (value * duration) / 100;
});

videoVolume.addEventListener('input', changeVolume)
// Функцію викликаємо при запуску скрипта для того, щоб відразу записати значення що лежить у велю
changeVolume();


volumeDown.addEventListener('click', toZeroValue);
volumeUp.addEventListener('click', toMaxValue);



videoFullscreen.addEventListener('click', ()=> {
    videoPlayer.requestFullscreen();
});

// Код створює залежність між змною значення повзунка в розгорнутому меню і в згорнутому плеєрі
videoPlayer.addEventListener('volumechange', () => {
    videoVolume.value = Math.round(videoPlayer.volume * 100)
})


console.dir(videoPlayer);

};
// Спосіб перевірки, для уникнення помилок. 
// try {
    
// } catch (e){

// }