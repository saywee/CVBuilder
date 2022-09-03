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
    let currentBox = ele.closest("div").parentElement
    let currentBoxClass = currentBox.classList[0]
    ele.addEventListener("keydown", (e) => {
        let ul = document.querySelector(`.${currentBoxClass} .text ul`)
        console.log(e.key)
        if(e.key == "Enter"){
            e.preventDefault()
            let li = document.createElement("li")
            li.innerHTML = `<textarea rows="1" onfocus="addTextArea(this)" onfocusout="checkInputLength(this)"></textarea>`
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

function addWork(){
    let totalBoxes = document.querySelectorAll(".about.work .box")
    let workDiv = document.querySelector(".add_work")
    let div = document.createElement("div")
    div.classList.add(`workBox${totalBoxes.length}`)
    div.classList.add(`box`)
    div.innerHTML = `
    <div class="year_company">
        <div class="duration${totalBoxes.length}" >
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
            <input type="checkbox" name="isWorkPresent${totalBoxes.length}" id="isWorkPresent${totalBoxes.length}" onclick="isCheck(this)"><label for="isWorkPresent${totalBoxes.length}">Present</label>
            </div>   
        </div>
        <div class="company">
            <span contenteditable="true"></span>
            <span contenteditable="true" class="country"></span>
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
}

function deleteWork(){
    let workBoxes = document.querySelectorAll(".about.work .box")
    let workSection = document.querySelector(".about.work")

    if(workBoxes.length > 1){
        workSection.removeChild(workBoxes[workBoxes.length - 1])
    }
}

// listenTextAreas()

// function something(arr){
//     arr.forEach(element => {
//         if(typeof element !== "number"){
//             arr.splice(arr.indexOf(element), 1)
//         }
//     });

//     arr.forEach(ele => {
//         console.log(typeof ele)
//     })
// }

// let arrays = [1, 'a', 'b', 2]
// something(arrays)


var arr = [7, 'c1', 'd2', 18, 'dr', 21, 2];
var numbers = arr.filter(numbersOnly);

console.log(numbers);

    function numbersOnly(value) {
        if (typeof (value) === 'number') {
            return value;
        }
    }
