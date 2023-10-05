document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("bigRedButton");
    const sound = document.getElementById("loudSound");

    button.addEventListener("click", function () {
        if (sound.paused) {
            sound.play();
        } else {
            sound.pause();
            sound.currentTime = 0;
        }
    });
});
