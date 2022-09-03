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
            li.innerHTML = `<span contenteditable="true" class="language" onfocus="addLanguage(this)" onfocusout="toggleFill(this)"></span>
            <button class="proficiency" >Full Professional Proficiency</button>
            <div class="proficiency_choices hide">
                                
                            </div>`
            ul.insertAdjacentElement("beforeend", li)
            ul.lastElementChild.children[0].focus()
        }else if(e.key === "Backspace"){
            if(ele.innerHTML.length === 0 && document.querySelectorAll(".language ul li").length > 1) {
                ul.removeChild(ul.lastElementChild)
                ul.lastElementChild.children[0].focus()
            }
        }
    })
    changeProficiency()
}


function changeProficiency(){
    let allProficiencies = document.querySelectorAll(".proficiency")
    allProficiencies.forEach(proficiency => {
        proficiency.addEventListener("click", ()=>{
            let parent = proficiency.parentElement
            let div = document.createElement("div")
            div.classList.add("proficiency_choices")
            div.innerHTML = `<button class="prof_choice" onclick="selectedProficiency(this)">1/5</button>
        <button class="prof_choice" onclick="selectedProficiency(this)">2/5</button>
        <button class="prof_choice" onclick="selectedProficiency(this)">3/5</button>
        <button class="prof_choice" onclick="selectedProficiency(this)">4/5</button>
        <button class="prof_choice" onclick="selectedProficiency(this)">5/5</button>`
        
            proficiency.replaceWith(div)
        })
    })
}

changeProficiency()

function selectedProficiency(ele){
    let prof_button = document.createElement("button")
    prof_button.classList.add("proficiency")
    let li = ele.closest("li")
    switch(ele.innerHTML){
        case "1/5":
            prof_button.innerHTML = "Elimentary Proficiency"
            break;
        case "2/5":
            prof_button.innerHTML = "Limited Working Proficiency"
            break;
        case "3/5":
            prof_button.innerHTML = "Professional Working Proficiency"
            break;
        case "4/5":
            prof_button.innerHTML = "Full Professional Proficiency"
            break;
        case "5/5":
            prof_button.innerHTML = "Native/Bilingual Proficiency"
            break;
    }
    ele.parentElement.replaceWith(prof_button)
    // li.removeChild(ele.parentElement)
    // li.insertAdjacentElement("beforeend", prof_button)
    changeProficiency()
}

function addSkill(ele){
    let li = document.createElement("li")
    let ul = document.querySelector(".skills .box ul")
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

