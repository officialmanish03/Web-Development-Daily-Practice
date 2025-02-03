const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const seekBar = document.getElementById("seek-bar");
const volumeBar = document.getElementById("volume-bar");
const trackTitle = document.getElementById("track-title");

let songs = [
    { title: "Lock", src: "Lock.mp3" },
    { title: "Song 2", src: "song2.mp3" }
];

let currentSongIndex = 0;

function loadSong(index) {
    audioPlayer.src = songs[index].src;
    trackTitle.textContent = songs[index].title;
}

playBtn.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = "⏸";
    } else {
        audioPlayer.pause();
        playBtn.textContent = "▶️";
    }
});

audioPlayer.addEventListener("timeupdate", () => {
    seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
});

seekBar.addEventListener("input", () => {
    audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
});

volumeBar.addEventListener("input", () => {
    audioPlayer.volume = volumeBar.value;
});

document.getElementById("next-btn").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playBtn.textContent = "⏸";
});

document.getElementById("prev-btn").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playBtn.textContent = "⏸";
});

loadSong(currentSongIndex);
