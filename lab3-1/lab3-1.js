var aud = document.getElementById("aud");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")


btn1.addEventListener("click", playaudio)
function playaudio() {
    aud.play()
}


btn2.addEventListener("click", pauseaudio)
function pauseaudio() {
    aud.pause()
}

// btn3.addEventListener("click", nextaudio)
// function nextaudio() {
//     aud.previous()
// }

aud.addEventListener("ended", (e) => {
    e.target.src = "B.mp3"
    e.target.play()
})
