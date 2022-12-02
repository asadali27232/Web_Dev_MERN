var backgroundAudio = new Audio('audios/background-audio.mp3')
backgroundAudio.play()

let player1 = true
let player2 = false
let arr = [
    ['Z', 'Z', 'Z'],
    ['Z', 'Z', 'Z'],
    ['Z', 'Z', 'Z']
]

document.getElementById('OX1').addEventListener('click', playing)
document.getElementById('OX2').addEventListener('click', playing)
document.getElementById('OX3').addEventListener('click', playing)
document.getElementById('OX4').addEventListener('click', playing)
document.getElementById('OX5').addEventListener('click', playing)
document.getElementById('OX6').addEventListener('click', playing)
document.getElementById('OX7').addEventListener('click', playing)
document.getElementById('OX8').addEventListener('click', playing)
document.getElementById('OX9').addEventListener('click', playing)

function playing(event) {

    let box = document.querySelector('#' + event.target.id)
    if (player1 == true) {
        box.style.backgroundImage = 'url(images/circle-o.png)'
        player1 = false
        player2 = true
    }
    else {
        box.style.backgroundImage = 'url(images/cross-x.png)'
        player1 = true
        player2 = false
    }

    box.removeEventListener('click', playing)
    console.log(arr)

}