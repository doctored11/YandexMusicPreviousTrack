if (typeof externalAPI == 'undefined') {
    console.log('апи нет');
    return
}


const trackHistory = [];
let currentIndex = -1;


function updateCurrentTrack() {
    const currentTrack = externalAPI.getCurrentTrack();
    if (currentTrack) {
        trackHistory.push(currentTrack);
        currentIndex++;
        console.log('добавили трек ', currentTrack.title, "\n позиция ", currentIndex);
    }
};

externalAPI.on(externalAPI.EVENT_TRACK, updateCurrentTrack);


function goPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        const prevTrack = trackHistory[currentIndex];
        if (prevTrack) {
            externalAPI.play(trackHistory.findIndex(track => track.link === prevTrack.link));
            console.log('предыыдущий (настоящий) трек включен', prevTrack.title);
        }
    } else {
        console.log('треков нет оказывается');
    }
};

function goNext()  {
    if (currentIndex < trackHistory.length - 1) {
        currentIndex++;
        const nextTrack = trackHistory[currentIndex];
        if (nextTrack) {
            externalAPI.play(trackHistory.findIndex(track => track.link === nextTrack.link));
            console.log('следующий(текущий) по истории', nextTrack.title);
        }
    } else {
        console.log("2 следущий по апи")
        externalAPI.next()
    }
};

updateCurrentTrack();



