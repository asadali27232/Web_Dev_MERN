let formSectionHidden = true
let infoSectionHidden = false
let expSectionHidden = true
let eduSectionHidden = true
let skillSectionHidden = true
let langSectionHidden = true

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
document.getElementById("education-section-opener").addEventListener('click', function () {
    const eduSection = document.getElementById('education-section')
    if (eduSectionHidden) {
        eduSection.style.display = 'flex'
        eduSection.style.visibility = 'visible'
        eduSectionHidden = false
    } else {
        eduSection.style.display = 'none'
        eduSection.style.visibility = 'hidden'
        eduSectionHidden = true
    }
})
document.getElementById("skill-section-opener").addEventListener('click', function () {
    const skillSection = document.getElementById('skill-section')
    if (skillSectionHidden) {
        skillSection.style.display = 'flex'
        skillSection.style.visibility = 'visible'
        skillSectionHidden = false
    } else {
        skillSection.style.display = 'none'
        skillSection.style.visibility = 'hidden'
        skillSectionHidden = true
    }
})
document.getElementById("language-section-opener").addEventListener('click', function () {
    const languageSection = document.getElementById('language-section')
    if (langSectionHidden) {
        languageSection.style.display = 'flex'
        languageSection.style.visibility = 'visible'
        langSectionHidden = false
    } else {
        languageSection.style.display = 'none'
        languageSection.style.visibility = 'hidden'
        langSectionHidden = true
    }
})
