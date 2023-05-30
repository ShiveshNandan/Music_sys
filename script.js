console.log("Welcome to music player");


// initiallising the variables 
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progreeBar = document.getElementById('progreeBar');
let songItems = Array.from(document.getElementsByClassName("songItem"));


let songs = [
    { songName: "01. Gandi Baat", filePath: "songs/01. Gandi Baat.mp3", coverPath: "covers/1.jpg" },
    { songName: "01. Laree Choote - Xulfi", filePath: "songs/01. Laree Choote - Xulfi.mp3", coverPath: "covers/1.jpg" },
    { songName: "01. Saibo (1)", filePath: "songs/01. Saibo (1).mp3", coverPath: "covers/1.jpg" },
    { songName: "1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "salam--ishaq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "salam--ishaq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "salam--ishaq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "salam--ishaq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "salam--ishaq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "salam--ishaq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" }
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// handle the play and pause button 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.style.background = "black";
    }
    else {
        audioElement.pause();
        masterPlay.style.background = "green";

    }
})
// listen to events 
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100000000)
    console.log(progress);
    progreeBar.value = progress;
})

progreeBar.addEventListener('change', () => {
    audioElement.currentTime = progreeBar.value * audioElement.duration / 100000000;
})

const makeAll = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.style.background = "red";
        // element.target.style.background = "red";
    })
}
Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAll();
        console.log(e.target);
        e.target.style.background = "yellow";
    })
})