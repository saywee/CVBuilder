function toggle(selectedCheckBox){
    let social = document.getElementById(`for${selectedCheckBox.id}`)
    if(selectedCheckBox.checked){
        social.classList.toggle("hide")
    }else{
        social.classList.toggle("hide")
    }
}

function toggleSection(selectedSection) {
    let section = document.querySelector(`#for${selectedSection.id}`)
    console.log(section)
    section.classList.toggle("hide")
}