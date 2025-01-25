var audio = new Audio('sestra.wav');
var isPlaying = 0;

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        isPlaying = 0;
    } else {
        audio.play();
        isPlaying = 1;
    }
}