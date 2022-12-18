let formSectionHidden = true
let infoSectionHidden = true
let expSectionHidden = true
let eduSectionHidden = true
let skillSectionHidden = true
let langSectionHidden = true

document.getElementById("form-section-opener").addEventListener('click', function () {
    const formSection = document.getElementById('form-section')
    if (formSectionHidden) {
        document.getElementById('btn-form-open').setAttribute('class', 'rotate-open')
        formSection.style.display = 'flex'
        formSection.style.visibility = 'visible'
        formSection.setAttribute('class', 'row fade-in')
        formSectionHidden = false
    } else {
        document.getElementById('btn-form-open').setAttribute('class', 'rotate-close')
        setTimeout(() => {
            formSection.style.display = 'none'
            formSection.style.visibility = 'hidden'
        }, 500)
        formSection.setAttribute('class', 'row slide-out')
        formSectionHidden = true
    }
})
document.getElementById("info-section-opener").addEventListener('click', function () {
    const infoSection = document.getElementById('info-section')
    if (infoSectionHidden) {
        document.getElementById('btn-info-open').setAttribute('class', 'rotate-open')
        infoSection.style.display = 'flex'
        infoSection.style.visibility = 'visible'
        infoSection.setAttribute('class', 'row col-12 fade-in')
        infoSectionHidden = false
        closeAll('info')
    } else {
        document.getElementById('btn-info-open').setAttribute('class', 'rotate-close')
        setTimeout(() => {
            infoSection.style.display = 'none'
            infoSection.style.visibility = 'hidden'
        }, 500)
        infoSection.setAttribute('class', 'row col-12 slide-out')
        infoSectionHidden = true
    }
})
document.getElementById("experience-section-opener").addEventListener('click', function () {
    const expSection = document.getElementById('experience-section')
    if (expSectionHidden) {
        document.getElementById('btn-exp-open').setAttribute('class', 'rotate-open')
        expSection.style.display = 'flex'
        expSection.style.visibility = 'visible'
        expSection.setAttribute('class', 'row col-12 fade-in')
        expSectionHidden = false
        closeAll('exp')
    } else {
        document.getElementById('btn-exp-open').setAttribute('class', 'rotate-close')
        setTimeout(() => {
            expSection.style.display = 'none'
            expSection.style.visibility = 'hidden'
        }, 500);
        expSection.setAttribute('class', 'row col-12 slide-out')
        expSectionHidden = true
    }
})
document.getElementById("education-section-opener").addEventListener('click', function () {
    const eduSection = document.getElementById('education-section')
    if (eduSectionHidden) {
        document.getElementById('btn-edu-open').setAttribute('class', 'rotate-open')
        eduSection.style.display = 'flex'
        eduSection.style.visibility = 'visible'
        eduSection.setAttribute('class', 'row col-12 fade-in')
        eduSectionHidden = false
        closeAll('edu')
    } else {
        document.getElementById('btn-edu-open').setAttribute('class', 'rotate-close')
        setTimeout(() => {
            eduSection.style.display = 'none'
            eduSection.style.visibility = 'hidden'
        }, 500);
        eduSection.setAttribute('class', 'row col-12 slide-out')
        eduSectionHidden = true
    }
})
document.getElementById("skill-section-opener").addEventListener('click', function () {
    const skillSection = document.getElementById('skill-section')
    if (skillSectionHidden) {
        document.getElementById('btn-skill-open').setAttribute('class', 'rotate-open')
        skillSection.style.display = 'flex'
        skillSection.style.visibility = 'visible'
        skillSection.setAttribute('class', 'row col-12 fade-in')
        skillSectionHidden = false
        closeAll('skill')
    } else {
        document.getElementById('btn-skill-open').setAttribute('class', 'rotate-close')
        setTimeout(() => {
            skillSection.style.display = 'none'
            skillSection.style.visibility = 'hidden'
        }, 500);
        skillSection.setAttribute('class', 'row col-12 slide-out')
        skillSectionHidden = true
    }
})
document.getElementById("language-section-opener").addEventListener('click', function () {
    const languageSection = document.getElementById('language-section')
    if (langSectionHidden) {
        document.getElementById('btn-lang-open').setAttribute('class', 'rotate-open')
        languageSection.style.display = 'flex'
        languageSection.style.visibility = 'visible'
        languageSection.setAttribute('class', 'row col-12 fade-in')
        langSectionHidden = false
        closeAll('lang')
    } else {
        document.getElementById('btn-lang-open').setAttribute('class', 'rotate-close')
        setTimeout(() => {
            languageSection.style.display = 'none'
            languageSection.style.visibility = 'hidden'
        }, 500);
        languageSection.setAttribute('class', 'row col-12 slide-out')
        langSectionHidden = true
    }
})
function closeAll(openSection) {
    if (openSection == 'info') {
        if (!expSectionHidden)
            document.getElementById("experience-section-opener").click()
        if (!eduSectionHidden)
            document.getElementById("education-section-opener").click()
        if (!skillSectionHidden)
            document.getElementById("skill-section-opener").click()
        if (!langSectionHidden)
            document.getElementById("language-section-opener").click()
    } else if (openSection == 'exp') {
        if (!infoSectionHidden)
            document.getElementById("info-section-opener").click()
        if (!eduSectionHidden)
            document.getElementById("education-section-opener").click()
        if (!skillSectionHidden)
            document.getElementById("skill-section-opener").click()
        if (!langSectionHidden)
            document.getElementById("language-section-opener").click()
    } else if (openSection == 'edu') {
        if (!infoSectionHidden)
            document.getElementById("info-section-opener").click()
        if (!expSectionHidden)
            document.getElementById("experience-section-opener").click()
        if (!skillSectionHidden)
            document.getElementById("skill-section-opener").click()
        if (!langSectionHidden)
            document.getElementById("language-section-opener").click()
    } else if (openSection == 'skill') {
        if (!infoSectionHidden)
            document.getElementById("info-section-opener").click()
        if (!expSectionHidden)
            document.getElementById("experience-section-opener").click()
        if (!eduSectionHidden)
            document.getElementById("education-section-opener").click()
        if (!langSectionHidden)
            document.getElementById("language-section-opener").click()
    } else if (openSection == 'lang') {
        if (!infoSectionHidden)
            document.getElementById("info-section-opener").click()
        if (!expSectionHidden)
            document.getElementById("experience-section-opener").click()
        if (!eduSectionHidden)
            document.getElementById("education-section-opener").click()
        if (!skillSectionHidden)
            document.getElementById("skill-section-opener").click()
    }
}