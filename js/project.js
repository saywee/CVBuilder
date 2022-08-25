let projectButtonDiv = document.querySelector(".projects .add_project")

function showProjectButton(){
    projectButtonDiv.classList.toggle("hide")
}

function addText(ele){
    let currentBox = ele.closest("div").parentElement.closest("div")
    
    let currentBoxClass = currentBox.classList[1]
    ele.addEventListener("keydown", (e) => {
        let ul = document.querySelector(`.${currentBoxClass} .text ul`)
        if(e.key == "Enter"){
            e.preventDefault()
            let li = document.createElement("li")
            li.innerHTML = `<textarea rows="1" onfocus="addText(this)" onfocusout="checkInputLength(this)"></textarea>`
            ul.insertAdjacentElement("beforeend", li)
            ul.lastElementChild.lastChild.focus()
        }else if(e.key === "Backspace"){
            if(ele.value.length === 0 && document.querySelectorAll(`.${currentBoxClass} .text ul li`).length > 1) {
                ul.removeChild(ul.lastElementChild)
                ul.lastElementChild.children[0].focus()

            }
        }
    })

    ele.addEventListener("input", () => {
        ele.style.height = "auto";
        ele.style.height = ele.scrollHeight + "px";
    })
}

function showProjectCheckBox(ele){
    let currentProject = document.querySelector(`.${ele.classList.value} .forpresentcheckbox`)
    currentProject.classList.toggle("hide")
}

function addProject(){
    let totalProjects = document.querySelectorAll(".projects ul li:not(.projects .text ul li)")
    let projectUl = document.querySelector(".projects ul:not(.projects .text ul)")
    let li = document.createElement("li")
    li.innerHTML = `<div class="projectDuration${totalProjects.length}" onmouseenter="showProjectCheckBox(this)" onmouseleave="showProjectCheckBox(this)">
    <input type="text" class="date" maxlength="2" placeholder="mm" oninput="restrictNumber(this)"/>
    <span>/ </span>
    <input type="text" class="year" maxlength="4" placeholder="yyyy" oninput="restrictNumber(this)"/>
    <span>- </span>
    <span class="present">
        <input type="text" class="date" maxlength="2" placeholder="mm" oninput="restrictNumber(this)"/>
        <span>/ </span>
        <input type="text" class="year" maxlength="4" placeholder="yyyy" oninput="restrictNumber(this)"/>
    </span>
    <div class="forpresentcheckbox hide">
        <input type="checkbox" name="isprojectPresent${totalProjects.length}" id="isprojectPresent${totalProjects.length}" onclick="isCheck(this)">
        <label for="isprojectPresent${totalProjects.length}">Present</label>
    </div>   
</div>
<div class="project_name">
    <span contenteditable="true" onfocusout="toggleFill(this)"></span>
</div>
<div class="text">
    <ul>
        <li>
            <textarea rows="1" onfocus="addText(this)" onfocusout="checkInputLength(this)"></textarea>
        </li>
    </ul>
</div>
</li>
</ul>`

projectUl.insertAdjacentElement("beforeend", li)
}