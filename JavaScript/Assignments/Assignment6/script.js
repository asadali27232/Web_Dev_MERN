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
        fillArray('O', event.target.id)
        win('O')
    }
    else {
        box.style.backgroundImage = 'url(images/cross-x.png)'
        player1 = true
        player2 = false
        fillArray('X', event.target.id)
        win('X')
    }

    box.removeEventListener('click', playing)

}
function fillArray(symbol, pos) {
    if (pos == 'OX1')
        arr[0][0] = symbol
    else if (pos == 'OX2')
        arr[0][1] = symbol
    else if (pos == 'OX3')
        arr[0][2] = symbol
    else if (pos == 'OX4')
        arr[1][0] = symbol
    else if (pos == 'OX5')
        arr[1][1] = symbol
    else if (pos == 'OX6')
        arr[1][2] = symbol
    else if (pos == 'OX7')
        arr[2][0] = symbol
    else if (pos == 'OX8')
        arr[2][1] = symbol
    else if (pos == 'OX9')
        arr[2][2] = symbol
}
function win(player) {
    let win = false
    console.log(win)

    if (arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2] && arr[0][2] == player)
        win = true
    else if (arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2] && arr[1][2] == player)
        win = true
    else if (arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2] && arr[2][2] == player)
        win = true
    else if (arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0] && arr[2][0] == player)
        win = true
    else if (arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1] && arr[2][1] == player)
        win = true
    else if (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2] && arr[2][2] == player)
        win = true
    else if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[2][2] == player)
        win = true
    else if (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0] && arr[2][0] == player)
        win = true

    console.log(win)
    if (win == true) {
        setTimeout(() => {
            alert("Player " + player + " Wins...!")
        }, 500)
    }
}