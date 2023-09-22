const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const audio = new Audio()
audio.src = "toi_music.mp3"

const now = new Date()
const toiDay = new Date(2023,8,28,19,0,0)
updateCountDownTime()



function updateCountDownTime(){
    const time = new Date()
    const diff = toiDay - time
    const d = Math.floor(diff / 1000 / 60 / 60 / 24)
    const h = Math.floor(diff / 1000 / 60 / 60)%24
    const m = Math.floor(diff / 1000 / 60) % 60
    const s = Math.floor(diff / 1000) % 60


    days.innerHTML = d
    hours.innerHTML = h < 10 ? '0' + h : h
    minutes.innerHTML = m < 10 ? '0' + m : m
    seconds.innerHTML = s < 10 ? '0' + s : s   
}

setInterval(() => {
    updateCountDownTime()
}, 1000);


const jiberuBtn = document.getElementById('submit')
const ati = document.getElementById('ati')
let konak = document.getElementById('konak')
const kel = document.getElementsByClassName('kel')
const okBtn = document.getElementById('ok')
jiberuBtn.onclick = ()=>{
    if (ati.value == ""){
        alert("Аты жөніңізді жазыңыз")
    }
    else{
        konak.textContent = ati.value
        ati.value = ""
        kel[0].classList.add('show')
    }
}

okBtn.onclick = () =>{
    kel[0].classList.remove('show')
}

let musicMode = false
const music = document.getElementById('music')
const playPauseBtn = document.getElementById('playPauseBtn')
let musicImg = document.getElementById('playPauseBtn')
const music_text = document.getElementsByClassName('music_text')
const music_gif = document.getElementsByClassName('music_gif')

function musicSoz () {
    if(musicMode == false){
        music_text[0].classList.add('s')
        music_gif[0].classList.remove('s')
    }
    else{
        music_gif[0].classList.add('s')
        music_text[0].classList.remove('s')
    }
}
musicSoz()


playPauseBtn.onclick = function musicPlayPause(){
    if (musicMode == false){
        musicMode = true
        musicSoz()
        audio.play()
        musicImg.src = "images/pause.png"
    }else{
        musicMode = false
        musicSoz()
        audio.pause()
        musicImg.src = "images/play.png"
    }
}
