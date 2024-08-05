const style = document.createElement('style');
style.textContent = `
    .player-controls__btn_prev.disabled {
        display: inline-block;
        opacity: 0.15;
        cursor: not-allowed;
    }
    .player-controls__btn_prev.enabled {
        display: inline-block;
        opacity: 0.5;
        cursor: pointer;
        pointer-events: auto;
    }
    .player-controls__btn_prev.enabled:hover {
        opacity: 1;
    }
    .player-controls__btn_prev.disabled:hover {
        opacity: 0.1;
    }
    .player-controls__track-controls{
        display:flex;
        align-items: center;
    }
   .player-controls__speed-controls{
    display:inline-block !important;
    right:110px;
    transform:translateY(-2px)
   }
    
    `
    ;
document.head.appendChild(style);



function applyStyles(state) {
    const prevButton = document.querySelector('.player-controls__btn_prev');
    if (prevButton) {
        prevButton.classList.remove('disabled', 'enabled');
        prevButton.classList.add(state);
    }
}

function updateCurrentTrack() {
    const trackIndex = window.externalAPI?.getTrackIndex();
    applyStyles(trackIndex < 1 ? 'disabled' : 'enabled');
}

function goPrev() {
    const currentIndex = window.externalAPI?.getTrackIndex();
    if (currentIndex > 0) {
        window.externalAPI.play(currentIndex - 1);
    }
}

function initialize() {
    console.log("Запуск кнопочки");
    const prevButton = document.querySelector('.player-controls__btn_prev');
    if (prevButton) {
        prevButton.addEventListener('click', goPrev);
    }
    updateCurrentTrack();

    if (window.externalAPI) {
        window.externalAPI.on(window.externalAPI.EVENT_TRACK, updateCurrentTrack);
    }
}
initialize() 