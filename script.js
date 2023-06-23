console.log("Welcome to music player");
// document.getElementById("repeat").style.zIndex = "10";

//++++++++++++++++++++++++++++++++++++++= initiallising the variables ++++++++++++++++++++++++++++++++++++++++++++++++++ 
let songIndex = 0;
let audioElement = new Audio('songs/0.mp3');
let masterPlay = document.getElementById('masterPlay');
let progreeBar = document.getElementById('progreeBar');
let volumeBar = document.getElementById('volumeBar');
let pp = document.getElementById('pp');
let ps = document.getElementById('ps');
let nn = document.getElementById('nn');
let pv = document.getElementById('pv');
let vv = document.getElementById('vv');
let mm = document.getElementById('mm');
let rr = document.getElementById('rr');
let r1 = document.getElementById('r1');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songInfo = document.getElementById("songinfo");
let forword = document.getElementById("p10");
let back = document.getElementById("m10");
console.log(songIndex);

let songs = [
    { songName: "Born To Shine", filePath: "songs/0.mp3" },
    { songName: "BYE - Aditya", filePath: "songs/1.mp3" },
    { songName: "Fark Nahi Padta", filePath: "songs/2.mp3" },
    { songName: "Lemonade", filePath: "songs/3.mp3" },
    { songName: "Nasha X Old Town Road", filePath: "songs/4.mp3" },
    { songName: "Obsessed", filePath: "songs/5.mp3" },
    { songName: "5 taara", filePath: "songs/6.mp3" },
    { songName: "Paisa Hai Toh", filePath: "songs/7.mp3" },
    { songName: "SHARN X BOHEMIA Mi Amor", filePath: "songs/8.mp3" },
    { songName: "Bose DK", filePath: "songs/9.mp3" }
]

songItems.forEach((element, i) => {
    console.log( i);
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    //     for (let k = 0; k < songs.length; k++) {
    //         audioElement = new Audio(`songs/${k}.mp3`);
    //         console.log(audioElement.duration);
    //         element.getElementsByClassName("timestamp")[0].innerText = audioElement.duration;
    //     }
})

// audioElement.play();

//++++++++++++++++++++++++++++++++++++++++++ handle the play and pause button +++++++++++++++++++++++++++++++++++++++++++++++++++++++

songInfo.innerText = songs[songIndex].songName;
document.getElementById(`${songIndex}`).style.background = "rgb(51, 49, 49)";
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        // masterPlay.style.background = "white";
        ps.style.display = "flex";
        pp.style.display = "none";
        document.getElementById("chutiya").style.opacity = 1;
    }
    else {
        audioElement.pause();
        // masterPlay.style.background = "green";
        pp.style.display = "flex";
        ps.style.display = "none";
        document.getElementById("chutiya").style.opacity = 0;

    }
    autoPlay();
})

document.addEventListener("keypress", function (event) {
    auio(event.key);
})

function auio(key) {
    if (key == " " && audioElement.paused) {
        audioElement.play();
        // masterPlay.style.background = "white";
        ps.style.display = "flex";
        pp.style.display = "none";
        document.getElementById("chutiya").style.opacity = 1;

    } else if (key == " " && audioElement.played) {
        audioElement.pause();
        // masterPlay.style.background = "green";
        pp.style.display = "flex";
        ps.style.display = "none";
        document.getElementById("chutiya").style.opacity = 0;
    }
    // console.log("i am clicked");
}





//+++++++++++++++++++++++++++++++  listen to events +++++++++++++++++++++++++++++++++++++++++++

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
        element.style.background = "#242323";
        // element.target.style.background = "red";
    })
}
Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAll();
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        e.target.style.background = "rgb(51, 49, 49)";
        audioElement.src = `songs/${songIndex}.mp3`;
        songInfo.innerText = songs[songIndex].songName;
        // audioElement.currentTime = 0;
        // masterPlay.style.background = "white";
        ps.style.display = "flex";
        pp.style.display = "none";
        document.getElementById("chutiya").style.opacity = 1;
        audioElement.play();
    })
})

// ++++++++++++++++++++++++++++++++++++++++++ auto play next +++++++++++++++++++++++++++++++++++++++++++
function autoPlay() {
    if (audioElement.currentTime == audioElement.duration) {
        songIndex += 1;
        progreeBar.value = 0;
        audioElement.src = `songs/${songIndex}.mp3`;
        // masterPlay.style.background = "white";
        ps.style.display = "flex";
        pp.style.display = "none";
        audioElement.play();
        makeAll();
        songInfo.innerText = songs[songIndex].songName;
        document.getElementById(`${songIndex}`).style.background = "rgb(51, 49, 49)";
        document.getElementById("chutiya").style.opacity = 1;
    }
}
setInterval(() => {
    autoPlay();
}, 10);

//+++++++++++++++++++++++++++++++++++++++++++++ previous and next button ++++++++++++++++++++++++++++++++++++++++++
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
    // masterPlay.style.background = "white";
    ps.style.display = "flex";
    pp.style.display = "none";
    audioElement.play();
    makeAll();
    songInfo.innerText = songs[songIndex].songName;
    document.getElementById(`${songIndex}`).style.background = "rgb(51, 49, 49)";
    document.getElementById("chutiya").style.opacity = 1;
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
    // masterPlay.style.background = "white";
    ps.style.display = "flex";
    pp.style.display = "none";
    audioElement.play();
    makeAll();
    document.getElementById(`${songIndex}`).style.background = "rgb(51, 49, 49)";
    // songInfo.innerText = (`${songIndex}`);
    songInfo.innerText = songs[songIndex].songName;
    document.getElementById("chutiya").style.opacity = 1;
    // document.getElementById('play').addEventListener('keypress')
})

// function auio(key) {
//     if (key == " " && audioElement.paused) {
//         audioElement.play();
//         masterPlay.style.background = "white";
//     } else if (key == " " && audioElement.played) {
//         audioElement.pause();
//         masterPlay.style.background = "green";
//     }
//     // console.log("i am clicked");
// }

//++++++++++++++++++++++++++++++++++++++++ volume button trying +++++++++++++++++++++++++++++++++++++++++++++++++++++

volumeBar.addEventListener('change', () => {
    audioElement.volume = volumeBar.value / 100;
    volum = parseInt(audioElement.volume * 100)
    volumeBar.value = volum;
    // console.log(volum);
})

//+++++++++++++++++++++++++++++++++++++++++++++ trying to mute ++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.getElementById('mbutton').addEventListener('click', () => {
    volum = parseInt(audioElement.volume * 100)
    if (volumeBar.value != 0) {
        volumeBar.value = 0;
        audioElement.volume = 0;
        // document.getElementById('mbutton').style.background = "red";
        mm.style.display = "flex";
        vv.style.display = "none";
    } else {
        volumeBar.value = 30;
        audioElement.volume = 0.3;
        // document.getElementById('mbutton').style.background = "white";
        vv.style.display = "flex";
        mm.style.display = "none";
    }

})

//+++++++++++++++++++++++++++++++++++++++++++ forword / backward button ++++++++++++++++++++++++++++++++++++++++++++++++
forword.addEventListener("click", () => {
    audioElement.currentTime = audioElement.currentTime + 10;
    // console.log(audioElement.currentTime);
})
back.addEventListener("click", () => {
    audioElement.currentTime = audioElement.currentTime - 10;
    // console.log(audioElement.currentTime);
})

//++++++++++++++++++++++++++++++++++++++++ repeat button ++++++++++++++++++++++++++++++++++++++++++++++
console.log(parseInt(audioElement.duration));
function repeat() {
    // let dude = setInterval(() => {
    // autoPlay() = false;
    if (audioElement.currentTime == (audioElement.duration)) {
        audioElement.currentTime = 0;
        // audioElement.play();
        progreeBar.value = 0;
        audioElement.src = `songs/${songIndex}.mp3`;
        // masterPlay.style.background = "white";
        ps.style.display = "flex";
        pp.style.display = "none";
        audioElement.play();
        makeAll();
        songInfo.innerText = songs[songIndex].songName;
        document.getElementById(`${songIndex}`).style.background = "rgb(51, 49, 49)";
        console.log("hello");
    }
    // if(document.getElementById('repeat').checked == false){
    //     clearInterval(dude);
    // }  
    // }, 1);
}
rr.addEventListener("click", () => {
    document.getElementById('repeat').checked = true;
    rr.style.display = "none";
    r1.style.display = "inline";
    r1.style.position = "fixed";
    console.log(document.getElementById('repeat').checked);
    if (document.getElementById('repeat').checked == true) {
        const dude = setInterval(() => {
            // document.getElementById("repeats").style.background = "pink";
            repeat();
            if (document.getElementById('repeat').checked == false) {
                // document.getElementById("repeats").style.background = "blue";
                clearInterval(dude);
            }
        }, 1);
    }
})
r1.addEventListener("click", () => {
    document.getElementById('repeat').checked = false;
    r1.style.display = "none";
    rr.style.display = "inline";
    rr.style.position = "fixed";
    console.log(document.getElementById('repeat').checked);
    if (document.getElementById('repeat').checked == true) {
        const dude = setInterval(() => {
            // document.getElementById("repeats").style.background = "pink";
            repeat();
            if (document.getElementById('repeat').checked == false) {
                // document.getElementById("repeats").style.background = "blue";
                clearInterval(dude);
            }
        }, 1);
    }
})
// document.getElementById("repeat").addEventListener('mouseover', () => {

//     if (document.getElementById('repeat').checked == true) {
//         const dude = setInterval(() => {
//             document.getElementById("repeats").style.background = "pink";
//             repeat();
//             if (document.getElementById('repeat').checked == false) {
//                 document.getElementById("repeats").style.background = "blue";
//                 clearInterval(dude);
//             }
//         }, 1);
//     }
//     // else if(document.getElementById('repeat').checked == false){
//     //     clearInterval(dude);
//     // }  
//     // else if (document.getElementById('repeat').checked == false){
//     //     // clearTimeout(() => {
//     //     //     console.log("off");
//     //     //     repeat();
//     //     // }, 1);
//     //     clearTimeout(repeat());
//     // }
// })
