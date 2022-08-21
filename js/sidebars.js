let sidebar = document.querySelector(".sidebar")
let sidebar2 = document.querySelector(".sidebar2")
let sidebar3 = document.querySelector(".sidebar3")
let body = document.querySelector("body")

function showSocials(){
    sidebar2.classList.toggle("active")
    sidebar.classList.toggle("active")
}

function moveBack(){
    if(sidebar2.classList.contains("active")){
        sidebar2.classList.toggle("active")
        sidebar.classList.toggle("active")
    }else{
        sidebar3.classList.toggle("active")
        sidebar.classList.toggle("active")
    }
}


function showAndHide(element){
    element.parentElement.classList.toggle("active")
}


let btn = document.querySelector(".print")
btn.onclick = () => {
    window.print();
}

// let github = document.getElementById("forgithub")
// // github.classList.add("hide")
// github.parentElement.classList.add("hide")
// console.log(github.parentElement.classList)


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
