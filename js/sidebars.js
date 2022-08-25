let layout_btn = document.querySelector(".layout_btn")
let social_btn = document.querySelector(".social_btn")
let section_btn = document.querySelector(".section_btn")
console.log(layout_btn)

layout_btn.addEventListener("click", () => {
    let layouts = document.querySelector(".layouts")
    layouts.classList.toggle("hide")
    document.querySelector(`.${layout_btn.classList.value} .icon`).classList.toggle("rotate")
})

social_btn.addEventListener("click", () => {
    let socials = document.querySelector(".socials")
    socials.classList.toggle("hide")
    document.querySelector(`.${social_btn.classList.value} .icon`).classList.toggle("rotate")
})

section_btn.addEventListener("click", () => {
    let sections = document.querySelector(".sections")
    sections.classList.toggle("hide")
    document.querySelector(`.${section_btn.classList.value} .icon`).classList.toggle("rotate")
})

function showAndHide(element){
    element.parentElement.classList.toggle("active")
}


let btn = document.querySelector(".print")
btn.onclick = () => {
    window.print();
}
