let formSectionHidden = false
let infoSectionHidden = false
let expSectionHidden = false

document.getElementById("form-section-opener").addEventListener('click', function () {
    const formSection = document.getElementById('form-section')
    if (formSectionHidden) {
        formSection.style.display = 'flex'
        formSection.style.visibility = 'visible'
        formSectionHidden = false
    } else {
        formSection.style.display = 'none'
        formSection.style.visibility = 'hidden'
        formSectionHidden = true
    }
})

document.getElementById("info-section-opener").addEventListener('click', function () {
    const infoSection = document.getElementById('info-section')
    if (infoSectionHidden) {
        infoSection.style.display = 'flex'
        infoSection.style.visibility = 'visible'
        infoSectionHidden = false
    } else {
        infoSection.style.display = 'none'
        infoSection.style.visibility = 'hidden'
        infoSectionHidden = true
    }
})
document.getElementById("experience-section-opener").addEventListener('click', function () {
    const expSection = document.getElementById('experience-section')
    if (expSectionHidden) {
        expSection.style.display = 'flex'
        expSection.style.visibility = 'visible'
        expSectionHidden = false
    } else {
        expSection.style.display = 'none'
        expSection.style.visibility = 'hidden'
        expSectionHidden = true
    }
})
