console.log("Welcome to music player");


// initiallising the variables 
let songIndex = 0;
let audioElement = new Audio('songs/0.mp3');
let masterPlay = document.getElementById('masterPlay');
let progreeBar = document.getElementById('progreeBar');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songInfo = document.getElementById("songinfo");
console.log(songIndex);

let songs = [
    { songName: "01. Gandi Baat", filePath: "songs/0.mp3", coverPath: "covers/1.jpg" },
    { songName: "01. Laree Choote - Xulfi", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "01. Saibo (1)", filePath: "songs/2.mp3", coverPath: "covers/1.jpg" },
    { songName: "har maidan", filePath: "songs/3.mp3", coverPath: "covers/1.jpg" },
    { songName: "1", filePath: "songs/4.mp3", coverPath: "covers/1.jpg" },
    { songName: "tune jo na kaha", filePath: "songs/5.mp3", coverPath: "covers/1.jpg" },
    { songName: "5 taara", filePath: "songs/6.mp3", coverPath: "covers/1.jpg" },
    { songName: "bewafa", filePath: "songs/7.mp3", coverPath: "covers/1.jpg" },
    { songName: "alone", filePath: "songs/8.mp3", coverPath: "covers/1.jpg" },
    { songName: "bose dk", filePath: "songs/9.mp3", coverPath: "covers/1.jpg" }
]

songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// handle the play and pause button 

songInfo.innerText = songs[songIndex].songName;
document.getElementById(`${songIndex}`).style.background = "yellow";
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
    // console.log(progress);
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
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        e.target.style.background = "yellow";
        audioElement.src = `songs/${songIndex}.mp3`;
        // audioElement.currentTime = 0;
        masterPlay.style.background = "black";
        audioElement.play();
    })
})

// previous and next button 
document.getElementById('prev').addEventListener('click', () => {
    if (songIndex == 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    console.log(songIndex);
    audioElement.src = `songs/${songIndex}.mp3`;
    // audioElement.currentTime = 0;
    masterPlay.style.background = "black";
    audioElement.play();
    makeAll();
    songInfo.innerText = songs[songIndex].songName;
    document.getElementById(`${songIndex}`).style.background = "yellow";
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex == 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    console.log(songIndex);
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    masterPlay.style.background = "black";
    audioElement.play();
    makeAll();
    document.getElementById(`${songIndex}`).style.background = "yellow";
    // songInfo.innerText = (`${songIndex}`);
    songInfo.innerText = songs[songIndex].songName;
    // document.getElementById('play').addEventListener('keypress')
})