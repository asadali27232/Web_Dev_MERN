let formSectionHidden = true
let infoSectionHidden = true
let expSectionHidden = true
let eduSectionHidden = true
let skillSectionHidden = true
let langSectionHidden = true
let skillCount = 1
let langCount = 1
document.getElementById("form-section-opener").addEventListener('click', function () {
    document.getElementById('createCV').scrollIntoView({
        behavior: 'smooth'
    });
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
    scrollSec()
    const infoSection = document.getElementById('info-section')
    document.getElementById('btn-info-open').setAttribute('class', 'rotate-open')
    if (infoSectionHidden) {
        setTimeout(() => {
            infoSection.style.display = 'flex'
            infoSection.style.visibility = 'visible'
            infoSection.setAttribute('class', 'row col-12 fade-in')
        }, 500);

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
    scrollSec()
    const expSection = document.getElementById('experience-section')
    if (expSectionHidden) {
        document.getElementById('btn-exp-open').setAttribute('class', 'rotate-open')
        setTimeout(() => {
            expSection.style.display = 'flex'
            expSection.style.visibility = 'visible'
            expSection.setAttribute('class', 'row col-12 fade-in')
        }, 500);
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
    scrollSec()
    const eduSection = document.getElementById('education-section')
    if (eduSectionHidden) {
        document.getElementById('btn-edu-open').setAttribute('class', 'rotate-open')
        setTimeout(() => {
            eduSection.style.display = 'flex'
            eduSection.style.visibility = 'visible'
            eduSection.setAttribute('class', 'row col-12 fade-in')
        }, 500);
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
    scrollSec()
    const skillSection = document.getElementById('skill-section')
    if (skillSectionHidden) {
        document.getElementById('btn-skill-open').setAttribute('class', 'rotate-open')
        setTimeout(() => {
            skillSection.style.display = 'flex'
            skillSection.style.visibility = 'visible'
            skillSection.setAttribute('class', 'row col-12 fade-in')
        }, 500);
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
    scrollSec()
    const languageSection = document.getElementById('language-section')
    if (langSectionHidden) {
        document.getElementById('btn-lang-open').setAttribute('class', 'rotate-open')
        setTimeout(() => {
            languageSection.style.display = 'flex'
            languageSection.style.visibility = 'visible'
            languageSection.setAttribute('class', 'row col-12 fade-in')
        }, 500);
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
function createCV(event) {
    formSectionHidden = true
    setTimeout(() => {
        document.getElementById("form-section-opener").click()
    }, 1000);
    document.getElementById('createCV').scrollIntoView({
        behavior: 'smooth'
    })
    if (event == 'cv1') {
        cv1()
    } else if (event == 'cv2') {
        cv2()
    } else if (event == 'cv3') {
        cv3()
    } else if (event == 'cv4') {
        cv4()
    }
}
function scrollSec() {
    document.getElementById('form-section').scrollIntoView({
        behavior: 'smooth'
    });
}

function cv1() {
    document.getElementById('cv1Div').style.display = 'block'
    document.getElementById('cv1Div').style.visibility = 'visible'
    document.getElementById('cv2Div').style.display = 'none'
    document.getElementById('cv2Div').style.visibility = 'hidden'
    document.getElementById('cv3Div').style.display = 'none'
    document.getElementById('cv3Div').style.visibility = 'hidden'
    document.getElementById('cv4Div').style.display = 'none'
    document.getElementById('cv4Div').style.visibility = 'hidden'
}
function cv2() {
    document.getElementById('cv1Div').style.display = 'none'
    document.getElementById('cv1Div').style.visibility = 'hidden'
    document.getElementById('cv2Div').style.display = 'block'
    document.getElementById('cv2Div').style.visibility = 'visible'
    document.getElementById('cv3Div').style.display = 'none'
    document.getElementById('cv3Div').style.visibility = 'hidden'
    document.getElementById('cv4Div').style.display = 'none'
    document.getElementById('cv4Div').style.visibility = 'hidden'
}
function cv3() {
    document.getElementById('cv1Div').style.display = 'none'
    document.getElementById('cv1Div').style.visibility = 'hidden'
    document.getElementById('cv2Div').style.display = 'none'
    document.getElementById('cv2Div').style.visibility = 'hidden'
    document.getElementById('cv3Div').style.display = 'block'
    document.getElementById('cv3Div').style.visibility = 'visible'
    document.getElementById('cv4Div').style.display = 'none'
    document.getElementById('cv4Div').style.visibility = 'hidden'
}
function cv4() {
    document.getElementById('cv1Div').style.display = 'none'
    document.getElementById('cv1Div').style.visibility = 'hidden'
    document.getElementById('cv2Div').style.display = 'none'
    document.getElementById('cv2Div').style.visibility = 'hidden'
    document.getElementById('cv3Div').style.display = 'none'
    document.getElementById('cv3Div').style.visibility = 'hidden'
    document.getElementById('cv4Div').style.display = 'block'
    document.getElementById('cv4Div').style.visibility = 'visible'
}
let inputs = document.getElementsByTagName('input')
for (let index = 0; index < 7; index++) {
    const element = inputs[index];
    element.addEventListener('keyup', inputChange)

}
function inputChange() {
    //! Personal Info
    let name =
        document.
            getElementById('full-name')
            .value == "" ? "Asad Ali" : document.getElementById('full-name').value
    let profession =
        document.
            getElementById('profession')
            .value == "" ? "Data Scientist" : document.getElementById('profession').value
    let city =
        document.
            getElementById('city')
            .value == "" ? "Lahore" : document.getElementById('city').value
    let country =
        document.
            getElementById('country')
            .value == "" ? "Pakistan" : document.getElementById('country').value
    let pCode =
        document.
            getElementById('pCode')
            .value == "" ? "54000" : document.getElementById('pCode').value
    let phone =
        document.
            getElementById('phone')
            .value == "" ? "03074315952" : document.getElementById('phone').value
    let email =
        document.
            getElementById('email')
            .value == "" ? "asadali27232@gmail.com" : document.getElementById('email').value

    document.getElementById('cv1-name').innerText = name
    document.getElementById('cv1-profession').innerText = profession
    document.getElementById('cv1-address').innerText = "" + city + ", " + country + ", " + pCode
    document.getElementById('cv1-number').innerText = phone
    document.getElementById('cv1-email').innerText = email
}

function addSkill() {
    let skillName = document.getElementById('skill').value
    let skillRate = document.getElementById('rate-skill').value

    if (skillName != "" && skillRate != 0) {
        let arr = ['Poor', 'Not Good', 'Good', 'Great', 'Excellent']
        let arrWidth = ['20%', '40%', '60%', '80%', '100%']

        document.getElementById('cv1-skill-div').innerHTML += `<p id="cv1-skill">${skillName}</p>
                                                                <div
                                                                    class="skill-bar-fill"
                                                                    id="cv1-skill${skillCount}-fill"
                                                                ></div>
                                                            <p class="right">${arr[skillRate]}</p>`

        document.getElementById(`cv1-skill${skillCount}-fill`).style.width = arrWidth[skillRate]
        skillCount++
        document.getElementById('skill').value = ""
        document.getElementById('rate-skill').value = 0
        if (document.getElementById('skill-section').children[0].nodeName == "SPAN") {
            document.getElementById('skill-section')
                .removeChild(document.getElementById('skill-section').children[0])
        }
    } else if (document.getElementById('skill-section').children[0].nodeName != "SPAN") {
        document.getElementById('skill-section').insertAdjacentHTML('afterbegin', '<span class="col-12 red my-2">*Please fill up all the fields</span>')
    }
}
function addLang() {
    let langName = document.getElementById('language').value
    let languageRate = document.getElementById('rate-language').value

    if (langName != "" && languageRate != 0) {
        let arr = ['Poor', 'Not Good', 'Good', 'Great', 'Excellent']
        let arrWidth = ['20%', '40%', '60%', '80%', '100%']

        document.getElementById('cv1-lang-div').innerHTML += `<p id="cv1-skill">${langName}</p>
                                                                <div
                                                                    class="skill-bar-fill"
                                                                    id="cv1-lang${langCount}-fill"
                                                                ></div>
                                                            <p class="right">${arr[languageRate]}</p>`

        document.getElementById(`cv1-lang${langCount}-fill`).style.width = arrWidth[languageRate]
        langCount++
        document.getElementById('language').value = ""
        document.getElementById('rate-language').value = 0
        if (document.getElementById('language-section').children[0].nodeName == "SPAN") {
            document.getElementById('language-section')
                .removeChild(document.getElementById('language-section').children[0])
        }
    } else if (document.getElementById('language-section').children[0].nodeName != "SPAN") {
        document.getElementById('language-section').insertAdjacentHTML('afterbegin', '<span class="col-12 red my-2">*Please fill up all the fields</span>')
    }
}
document.getElementById('exp-present').addEventListener('click', () => {
    if (document.getElementById('exp-present').checked) {
        document.getElementById('exp-eDate').setAttribute('disabled', 'true')
    } else {
        document.getElementById('exp-eDate').removeAttribute('disabled')
    }
})
document.getElementById('edu-present').addEventListener('click', () => {
    if (document.getElementById('edu-present').checked) {
        document.getElementById('edu-eDate').setAttribute('disabled', 'true')
    } else {
        document.getElementById('edu-eDate').removeAttribute('disabled')
    }
})
function addEdu() {
    let name = document.getElementById('institute-name')
    let location = document.getElementById('institute-location')
    let degree = document.getElementById('degree')
    let sDate = document.getElementById('edu-sDate')
    let eDate = document.getElementById('edu-eDate')

    if (name.value != "" && location.value != "" && degree.value != "" && sDate.value != "" &&
        (eDate.value != "" || document.getElementById('edu-present').checked)) {
        document.getElementById('cv1-edu-list').innerHTML += `<div class="exp-edu-flex">
                                                            <div class="date bold">
                                                                <p>
                                                                    ${sDate.value.slice(0, 7)}- <br />
                                                                    ${document.getElementById('edu-present').checked ? "Present" : eDate.value.slice(0, 7)}
                                                                </p>
                                                            </div>
                                                            <div class="exp-edu">
                                                                <p class="larger bold">
                                                                    ${degree.value}
                                                                </p>
                                                                <p>${name.value}, ${location.value}</p>
                                                            </div>
                                                        </div>`
        name.value = ""
        location.value = ""
        degree.value = ""
        eDate.value = ""
        sDate.value = ""
        if (document.getElementById('education-section').children[0].nodeName == "SPAN") {
            document.getElementById('education-section')
                .removeChild(document.getElementById('education-section').children[0])
        }

    } else if (document.getElementById('education-section').children[0].nodeName != "SPAN") {
        document.getElementById('education-section').insertAdjacentHTML('afterbegin', '<span class="col-12 red my-2">*Please fill up all the fields</span>')
    }
}
function addExp() {
    let job = document.getElementById('job-title')
    let employer = document.getElementById('employer')
    let city = document.getElementById('wCity')
    let country = document.getElementById('wCountry')
    let sDate = document.getElementById('exp-sDate')
    let eDate = document.getElementById('exp-eDate')

    if (job.value != "" && employer.value != "" && city.value != "" && country.value && sDate.value != "" &&
        (eDate.value != "" || document.getElementById('exp-present').checked)) {
        document.getElementById('cv1-exp-list').innerHTML +=
            `<div class="exp-edu-flex">
                                <div class="date bold">
                                    <p>
                                        ${sDate.value.slice(0, 7)}- <br />
                                        ${document.getElementById('exp-present').checked ? "Present" : eDate.value.slice(0, 7)}
                                    </p>
                                </div>
                                <div class="exp-edu">
                                    <p class="larger bold">${job.value}</p>
                                    <p class="address_bold">
                                        ${city.value}, ${country.value}
                                    </p>
                                    <p>
                                        
                                    </p>
                                </div>
                            </div>`

        job.value = ""
        employer.value = ""
        city.value = ""
        country.value = ""
        eDate.value = ""
        sDate.value = ""
        if (document.getElementById('experience-section').children[0].nodeName == "SPAN") {
            document.getElementById('experience-section')
                .removeChild(document.getElementById('experience-section').children[0])
        }

    } else if (document.getElementById('experience-section').children[0].nodeName != "SPAN") {
        document.getElementById('experience-section').insertAdjacentHTML('afterbegin', '<span class="col-12 red my-2">*Please fill up all the fields</span>')
    }
}