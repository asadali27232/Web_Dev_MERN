setInterval(() => {
    var d = new Date();

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var n = d.getMilliseconds();
    console.log(n)

    var hRotation = 30 * h + 0.5 * m;
    var mRotation = 6 * m + 0.1 * s;
    var sRotation = 6 * s + 0.006 * n;

    document.getElementById("hour").style.transform = `rotate(${hRotation}deg)`;
    document.getElementById("min").style.transform = `rotate(${mRotation}deg)`;
    document.getElementById("sec").style.transform = `rotate(${sRotation}deg)`;

    var ap = "AM";
    if (h == 0) {
        h = 12;
    } else if (h > 12) {
        h = h - 12
        ap = "PM"
    } else if (h < 10) {
        h = "0" + h
    } else {
        ap = "AM"
    }

    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }

    if (s < 10) {
        s = "0" + s
    }

    document.getElementById("dHour").innerHTML = h;
    document.getElementById("dMin").innerHTML = m;
    document.getElementById("dSec").innerHTML = s;
    document.getElementById("dAP").innerHTML = ap;

}, 1);