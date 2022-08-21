let workButtonDiv = document.querySelector(".add_work")
let workButton = document.querySelector(".add_work_button")

function showWorkButton(){
    workButtonDiv.classList.toggle("hide")
}

function checkInputLength(ele) {
    if(ele.value.trim().length > 0) {
        ele.classList.add("filled")
    }else{
        ele.classList.remove("filled")
    }
}

function addTextArea(ele){
    console.log(ele)
    let currentBox = ele.closest("div").parentElement.classList[0]
    ele.addEventListener("keydown", (e) => {
        let ul = document.querySelector(`.${currentBox} .text ul`)
        if(e.key == "Enter"){
            e.preventDefault()
            let li = document.createElement("li")
            li.innerHTML = `<textarea rows="1" onfocus="addTextArea(this)" onfocusout="checkInputLength(this)"></textarea>`
            ul.insertAdjacentElement("beforeend", li)
        }else if(e.key === "Backspace"){
            if(ele.value.length === 0 && document.querySelectorAll(`.${currentBox} .text ul li`).length > 1) {
                ul.removeChild(ul.lastElementChild)
            }
        }
    })

    ele.addEventListener("input", (e) => {
        ele.style.height = "auto";
        ele.style.height = ele.scrollHeight + "px";
    })
}

function addWork(){
    let totalBoxes = document.querySelectorAll(".about.work .box")
    let workDiv = document.querySelector(".add_work")
    let div = document.createElement("div")
    div.classList.add(`workBox${totalBoxes.length}`)
    div.classList.add(`box`)
    div.innerHTML = `
    <div class="year_company">
        <div class="duration" >
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
                <input type="checkbox" name="isPresent" id="isPresent" onclick="isCheck(this)">Present
            </div>   
        </div>
        <div class="company">
            <span contenteditable="true"></span>
        </div>
        <div class="country">
            <span contenteditable="true"></span>
        </div>
    </div>
    <div class="text">
        <h4>Role</h4>
        <ul>
            <li>
                <textarea rows="1" onfocus="addTextArea(this)" onfocusout="checkInputLength(this)"></textarea>
            </li>
        </ul>
    </div>`

workDiv.insertAdjacentElement("beforebegin", div)
totalBoxes = document.querySelectorAll(".workBox")
// listenTextAreas()
}

// listenTextAreas()


