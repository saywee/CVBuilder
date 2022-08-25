let leftContainer = document.querySelector(".left_side")
let rightContainer = document.querySelector(".right_side")

let allLeftSection = document.querySelectorAll(".contactInfo")
let allRightSection = document.querySelectorAll(".about")
let allSections = [...allLeftSection, ...allRightSection]

let page = document.querySelector(".page")

allSections.forEach(section => {
    section.addEventListener("dragstart", (e) => {
        section.classList.add("drag")
        e.dataTransfer.setDragImage(section, 0 ,0)
    })

    section.addEventListener("dragend", () => {
        section.classList.remove("drag")
    })
})

leftContainer.addEventListener("dragover", e => {
    const drag = document.querySelector(".drag")
    console.log(!drag.classList.contains("work")|| !drag.classList.contains("projects"))
    const afterElement = getDragAfterElement(leftContainer, e.clientY)
    if(!drag.classList.contains("work") && !drag.classList.contains("projects") && page.innerHTML !== "pageTwo"){
        e.preventDefault()
        if (afterElement == null) {
            leftContainer.appendChild(drag)
        } else {
            leftContainer.insertBefore(drag, afterElement)
        }
    }else if(page.innerHTML === "pageTwo"){
        e.preventDefault()
        if (afterElement == null) {
            leftContainer.appendChild(drag)
        } else {
            leftContainer.insertBefore(drag, afterElement)
        }
    }
})

rightContainer.addEventListener("dragover", e => {
    e.preventDefault()
    const drag = document.querySelector(".drag")
    const afterElement = getDragAfterElement(rightContainer, e.clientY)
    if (afterElement == null) {
        rightContainer.appendChild(drag)
    } else {
        rightContainer.insertBefore(drag, afterElement)
    }
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".contactInfo:not(.drag), .about:not(.drag)")]


    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset){
            return {offset: offset, element: child}
        }else {
            return closest
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element
}

