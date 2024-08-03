const prevButton = document.querySelector('.player-controls__btn_prev');
function disablePrevButton() {
    if (typeof externalAPI == 'undefined') {
        console.log('апи нет ');
        return
    }
    const prevButton = document.querySelector('.player-controls__btn_prev');

    if (prevButton) {
        prevButton.style.display = 'inline-block'; // Показываем кнопку, если нужно
        prevButton.style.opacity = '0.5'; // Делает кнопку полупрозрачной
        prevButton.style.cursor = 'not-allowed'; // Меняет курсор на запрещающий
        prevButton.style.pointerEvents = 'none'; // Отключает взаимодействие с кнопкой
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
        prevButton.style.opacity = '1'; // Возвращает полную непрозрачность
        prevButton.style.cursor = 'pointer'; // Меняет курсор обратно на указатель
        prevButton.style.pointerEvents = 'auto'; // Включает взаимодействие с кнопкой
    } else {
        console.log('Кнопка не найдена');
    }
}







function updateCurrentTrack() {
    if (externalAPI.getTrackIndex() < 1) { disablePrevButton() } else {
        enablePrevButton()
    }
}

externalAPI.on(externalAPI.EVENT_TRACK, updateCurrentTrack);


function goPrev() {
    const currentIndex = externalAPI.getTrackIndex();
    if (currentIndex < 1) {
        return
    }

    externalAPI.play(currentIndex - 1)

};


updateCurrentTrack();



