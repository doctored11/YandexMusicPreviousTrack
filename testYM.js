const prevButton = document.querySelector('.player-controls__btn_prev');

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
    if (prevButton) {
        Object.assign(prevButton.style, styles);
    } else {
        console.log('кнопки нема');
    }
}

function disablePrevButton() {
    if (typeof externalAPI == 'undefined') {
        console.log('апи нет ');
        return
    }
    applyStyles(buttonStyles.disabled);
}

function enablePrevButton() {
    if (typeof externalAPI == 'undefined') {
        console.log('апи нет ');
        return
    }


    applyStyles(buttonStyles.enabled);
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



