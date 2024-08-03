const prevButton = document.querySelector('.player-controls__btn_prev');
function disablePrevButton() {
    if (typeof externalAPI == 'undefined') {
        console.log('апи нет ');
        return
    }
    const prevButton = document.querySelector('.player-controls__btn_prev');

    if (prevButton) {
        prevButton.style.display = 'inline-block'; 
        prevButton.style.opacity = '0.5'; 
        prevButton.style.cursor = 'not-allowed'; 
        prevButton.style.pointerEvents = 'none'; 
    } else {
        console.log('Кнопка не найдена');
    }
}

function enablePrevButton() {
    if (typeof externalAPI == 'undefined') {
        console.log('апи нет ');
        return
    }
    const prevButton = document.querySelector('.player-controls__btn_prev');

    if (prevButton) {
        prevButton.style.opacity = '1'; 
        prevButton.style.cursor = 'pointer'; 
        prevButton.style.pointerEvents = 'auto'; 
    } else {
        console.log('Кнопка не найдена');
    }
}

function updateCurrentTrack() {
    if (externalAPI.getTrackIndex() < 1) { disablePrevButton() } else {
        enablePrevButton()
    }
}

function goPrev() {
    const currentIndex = externalAPI.getTrackIndex();
    if (currentIndex < 1) {
        return
    }
    externalAPI.play(currentIndex - 1)

};


function initialize() {
    if (prevButton) {
        prevButton.addEventListener('click', goPrev);
    }
    updateCurrentTrack();

    externalAPI.on(externalAPI.EVENT_TRACK, updateCurrentTrack);
}

initialize();



