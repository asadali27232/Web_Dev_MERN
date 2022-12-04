let player1
let player2
let arr
let backgroundAudio = new Audio('audios/background-audio.mp3')
let drawCounter = 0;

function init() {
    setTimeout(() => {
        backgroundAudio.play()
    }, 500)

    drawCounter = 0;

    player1 = true
    document.getElementById('turnL').style.visibility = 'visible'
    document.getElementById('turnR').style.visibility = 'hidden'
    player2 = false
    arr = [
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
}

function playing(event) {
    drawCounter++

    let box = document.querySelector('#' + event.target.id)
    if (player1 == true) {
        box.style.backgroundImage = 'url(images/circle-o.png)'
        player1 = false
        player2 = true
        document.getElementById('turnL').style.visibility = 'hidden'
        document.getElementById('turnR').style.visibility = 'visible'
        fillArray('O', event.target.id)
        winCheck('O')
    }
    else {
        box.style.backgroundImage = 'url(images/cross-x.png)'
        player1 = true
        player2 = false
        document.getElementById('turnL').style.visibility = 'visible'
        document.getElementById('turnR').style.visibility = 'hidden'
        fillArray('X', event.target.id)
        winCheck('X')
    }
    if (drawCounter == 9) {
        draw()
    }
    var backgroundAudio = new Audio('audios/success_bell-6776.mp3')
    setTimeout(() => {
        backgroundAudio.play()
    }, 500)
    box.removeEventListener('click', playing)
    box.addEventListener('click', wrongMove)

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
function winCheck(player) {
    let win = false

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
    else
        win = false
    winCelebration(win, player)
    if (win == true && drawCounter == 9)
        drawCounter--
}
function winCelebration(win, player) {
    if (win == true) {
        let winnerName
        if (player == 'O')
            winnerName = document.getElementById('p1-name-input').value
        else
            winnerName = document.getElementById('p2-name-input').value

        document.getElementById('OX1').removeEventListener('click', playing)
        document.getElementById('OX2').removeEventListener('click', playing)
        document.getElementById('OX3').removeEventListener('click', playing)
        document.getElementById('OX4').removeEventListener('click', playing)
        document.getElementById('OX5').removeEventListener('click', playing)
        document.getElementById('OX6').removeEventListener('click', playing)
        document.getElementById('OX7').removeEventListener('click', playing)
        document.getElementById('OX8').removeEventListener('click', playing)
        document.getElementById('OX9').removeEventListener('click', playing)

        setTimeout(() => {
            document.getElementById('mid-screen').innerHTML =
                `<div class="win-container">
                    <div class="win-screen">
                    <p id="winner-player">${winnerName}</p>
                    </div>
                    <div id="continue" onclick="continueGame()" >Continue</div>
                    <div id="start-new" onclick="startNew()" >Start New</div>
                </div>`
            let win2 = new Audio('audios/success-fanfare-trumpets-6185.mp3')
            win2.play()
        }, 700)
        if (player == 'O') {
            document.getElementById('p1-win-count-span').innerText =
                parseInt(document.getElementById('p1-win-count-span').innerText) + 1
            document.getElementById('p1-score').innerText =
                parseInt(document.getElementById('p1-score').innerText) + 100
            document.getElementById('turnL').style.visibility = 'visible'
            document.getElementById('turnR').style.visibility = 'hidden'
        } else if (player == 'X') {
            document.getElementById('p2-win-count-span').innerText =
                parseInt(document.getElementById('p2-win-count-span').innerText) + 1
            document.getElementById('p2-score').innerText =
                parseInt(document.getElementById('p2-score').innerText) + 100
            document.getElementById('turnL').style.visibility = 'hidden'
            document.getElementById('turnR').style.visibility = 'visible'
        }
        let winAudio = new Audio('audios/success-1-6297.mp3')
        backgroundAudio.pause()
        winAudio.play()
    }
}
function wrongMove() {
    var wrongMoveAudio = new Audio('audios/error-1-126514.mp3')
    wrongMoveAudio.play()
}
function continueGame() {
    uiAudioPlay()
    document.getElementById('mid-screen').innerHTML = `
        <div class="my-container">
            <div class="ropeL"></div>
            <div class="ropeR"></div>
            <div class="game-board">
              <div class="OX" id="OX1"></div>
              <div class="OX" id="OX2"></div>
              <div class="OX" id="OX3"></div>
              <div class="OX" id="OX4"></div>
              <div class="OX" id="OX5"></div>
              <div class="OX" id="OX6"></div>
              <div class="OX" id="OX7"></div>
              <div class="OX" id="OX8"></div>
              <div class="OX" id="OX9"></div>
            </div>
          </div>`
    init()
}
function startNew() {
    uiAudioPlay()

    continueGame()
    document.getElementById('p1-win-count-span').innerText = 0
    document.getElementById('p1-score').innerText = 0

    document.getElementById('p2-win-count-span').innerText = 0
    document.getElementById('p2-score').innerText = 0

    document.getElementById('p1-name-input').value = 'Player I'
    document.getElementById('p2-name-input').value = 'Player II'

    document.getElementById('turnL').style.visibility = 'visible'
    document.getElementById('turnR').style.visibility = 'hidden'
}
function draw() {
    backgroundAudio.pause()
    let drawAudio = new Audio('audios/winbanjo-96336.mp3')
    drawAudio.play()
    setTimeout(() => {
        document.getElementsByClassName('game-board')[0].setAttribute('id', 'drawFlex')
        document.getElementsByClassName('game-board')[0].innerHTML = `<p id="winner-player">Match Draw</p>
                    <div id="continue" onclick="continueGame()" >Continue</div>
                    <div id="start-new" onclick="startNew()" >Start New</div>`
    }, 700)
    document.getElementById('turnL').style.visibility = 'visible'
    document.getElementById('turnR').style.visibility = 'visible'
}
function uiAudioPlay() {
    let uiAudio = new Audio('audios/button-pressed-38129.mp3')
    uiAudio.play()
}
