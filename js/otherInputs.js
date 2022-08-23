let languageInputs = document.querySelector(".contactInfo.language span")
let skillInputs = document.querySelector(".skills .box span")
let hobbyInputs = document.querySelector(".hobbies .hobby")

let skillTexts = document.querySelectorAll(".skill")
skillTexts.forEach(skill => {
    skill.addEventListener("focusout", () => {
        if(skill.innerHTML.trim().length > 0) {
            skill.classList.add("filled")   
        }else{
            skill.classList.remove("filled")
        }
    })
})

function toggleFill(ele) {
    if(ele.innerHTML.trim().length > 0){
        ele.classList.toggle("filled")
    }
}

let hobbyTexts = document.querySelectorAll(".hobby")
hobbyTexts.forEach(hobby => {
    hobby.addEventListener("focusout", () => {
        if(hobby.innerHTML.trim().length > 0) {
            hobby.classList.add("filled")   
        }else{
            hobby.classList.remove("filled")
        }
    })
})

function addLanguage(ele){
    ele.addEventListener("keydown", e => {
        let li = document.createElement("li")
        let ul = document.querySelector(`.language ul`)
        if(e.key === "Enter"){
            e.preventDefault()
            li.innerHTML = `<span contenteditable="true" class="language" onfocus="addLanguage(this)" onfocusout="toggleFill(this)"></span>`
            ul.insertAdjacentElement("beforeend", li)
            ul.lastElementChild.lastChild.focus()
        }else if(e.key === "Backspace"){
            if(ele.innerHTML.length === 0 && document.querySelectorAll(".language ul li").length > 1) {
                ul.removeChild(ul.lastElementChild)
                ul.lastElementChild.children[0].focus()
            }
        }
    })
}

function addSkill(ele){
    let li = document.createElement("li")
    let ul = document.querySelector(".skills .box ul")
    console.log(ul)
    ele.addEventListener("keydown", e => {
        if(e.key === "Enter"){
            e.preventDefault()
            li.innerHTML = `<span class="skill" contenteditable="true" onfocus="addSkill(this)" onfocusout="toggleFill(this)"></span>`
            ul.insertAdjacentElement("beforeend", li)
            ul.lastElementChild.lastChild.focus()
        }else if(e.key === "Backspace"){
            if(ele.innerHTML.length == 0 && document.querySelectorAll(".skills .box ul li").length > 1){
                ul.removeChild(ul.lastElementChild)
                ul.lastElementChild.children[0].focus()
            }
        }
    })
}

function addHobby(ele){
    let li = document.createElement("li")
    let ul = document.querySelector(".hobbies .box ul")
    ele.addEventListener("keydown", e => {
        if(e.key === "Enter"){
            e.preventDefault()
            li.innerHTML = `<span class="hobby" contenteditable="true" onfocus="addHobby(this)" onfocusout="toggleFill(this)"></span>`
            ul.insertAdjacentElement("beforeend", li)
            ul.lastElementChild.lastChild.focus()
        }else if(e.key === "Backspace"){
            if(ele.innerHTML.length == 0 && document.querySelectorAll(".hobbies .box ul li").length > 1){
                ul.removeChild(ul.lastElementChild)
                ul.lastElementChild.children[0].focus()
            }
        }
    })
}

function adjustHeight(ele){
    ele.addEventListener("input", () => {
        ele.style.height = "auto";
        ele.style.height = ele.scrollHeight + "px";
    })
}

