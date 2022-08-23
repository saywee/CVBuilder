let dates = document.querySelectorAll(".contactInfo.education .date")
console.log(dates)
function restrictNumber (ele) {  
    console.log(ele.value)
    var newValue = ele.value.replace(new RegExp(/[^\d]/,'ig'), "");
    ele.value = newValue;

  }

dates.forEach(date => {
    date.addEventListener('focusout', () => {
        let currentInput = date.value
        if(currentInput.length == 1){
            currentInput = '0' + currentInput
            date.value = currentInput
        }
        showPresentCheckBox(date)
    })    
})

function showPresentCheckBox(ele){
    let parentElement = ele.closest("div")
    let currentDurationElement = parentElement.classList.value.split("duration")
    if(currentDurationElement[1].length > 0){
        document.querySelector(`.duration${currentDurationElement[1]} .forpresentcheckbox`).classList.toggle("hide")
    }else{
        document.querySelector(`.duration .forpresentcheckbox`).classList.toggle("hide")
    }
}

function isCheck(element){
    let grandparent = element.parentElement.parentElement.classList.value
    let spanPresent = document.querySelector(`.${grandparent} .present`)
    if(element.checked){ 
        spanPresent.innerHTML = 'Present'
    }else{
        spanPresent.innerHTML = `<input type="text" class="date" value="" maxlength="2" placeholder="mm" oninput="restrictNumber(this)"/>
        <span>/ </span><input type="text" class="year" maxlength="4" placeholder="yyyy" oninput="restrictNumber(this)"/>`
        
    }
}

let addButton = document.querySelector(".add_education_button")
const ul = document.querySelector(".contactInfo.education ul")

function showButton(){
    addButton.classList.toggle("hide")
}

function addEducation(){
    let lis = document.querySelectorAll(".contactInfo.education ul li")
    let li = document.createElement("li")
    li.innerHTML = `
    <div class="duration${lis.length}" onmouseenter="showPresentCheckBox(this)" onmouseleave="showPresentCheckBox(this)">
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
    <input type="checkbox" name="isPresent${lis.length}" id="isPresent${lis.length}" onclick="isCheck(this)"><label for="isPresent${lis.length}">Present</label>
    </div>   
    </div>
    <span class="course" contenteditable="true"></span>
    <br>
    <span class="university" contenteditable="true"></span>
    <br>
    <span class="country" contenteditable="true"></span>
    `

    ul.insertAdjacentElement('beforeend', li)
}

addButton.addEventListener("click", () => {
    console.log("clicked")
})

