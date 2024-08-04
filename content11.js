console.log("Скрипт загружен! l0l");


const buttonStyles = {
    disabled: {
        display: 'inline-block',
        opacity: '0.15',
        cursor: 'not-allowed',
    },
    enabled: {
        display: 'inline-block',
        opacity: '0.5',
        cursor: 'pointer',
        pointerEvents: 'auto'
    }
};

function applyStyles(styles) {
    const prevButton = document.querySelector('.player-controls__btn_prev');
    if (prevButton) {
        Object.assign(prevButton.style, styles);
    } else {
        console.log('кнопки нема');
    }
}

function disablePrevButton() {
    applyStyles(buttonStyles.disabled);
}

function enablePrevButton() {
    applyStyles(buttonStyles.enabled);
}

function updateCurrentTrack() {
    if (typeof externalAPI === 'undefined') {
        console.log('externalAPI не определен');
        return;
    }
    if (!externalAPI || externalAPI.getTrackIndex() < 1) {
        disablePrevButton();
    } else {
        enablePrevButton();
    }
}

function goPrev() {
    if (typeof externalAPI === 'undefined') {
        console.log('externalAPI не определен');
        return;
    }
    const currentIndex = externalAPI.getTrackIndex();
    if (currentIndex < 1) {
        return;
    }
    externalAPI.play(currentIndex - 1);
}

function initialize() {
    console.log("Запуск кнопочки")
    const prevButton = document.querySelector('.player-controls__btn_prev');
    if (prevButton) {
        prevButton.addEventListener('click', goPrev);
    }
    updateCurrentTrack();

    if (typeof externalAPI !== 'undefined') {
        externalAPI.on(externalAPI.EVENT_TRACK, updateCurrentTrack);
    } else {
        console.log('externalAPI не определен');
    }
}
initialize()