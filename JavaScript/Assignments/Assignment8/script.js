let formSectionHidden = false
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
