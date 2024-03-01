let addButton = document.getElementById("addButton");
let skillCon = document.getElementById("skillContainer");
let errorMessage = document.getElementById("errorMsg");

addButton.addEventListener("click", function () {
    let skillNameInput = document.getElementById("skillName");
    let skillValueInput = document.getElementById("skillValue");

    let skillName = skillNameInput.value;
    let skillValue = parseInt(skillValueInput.value);

    //validation

    if (isNaN(skillValue) || skillValue < 0 || skillValue > 100) {
        errorMessage.innerText = "Please enter the  valid skills value";
        errorMessage.style.color = "red";
        errorMessage.style.textAlign = "center";
        errorMessage.style.fontSize = "20px"
        return;
    }

    // Div 

    let skill = document.createElement("div");
    skill.setAttribute("class","skill");

    //Name value

    let skillNameElement = document.createElement("div");
    skillNameElement.setAttribute("class","skillName");
    skillNameElement.innerText = skillName;

    // Progress Bar                                                                                                                                                                                                                                                                                                 

    let skillProgressBar = document.createElement("div");
    skillProgressBar.setAttribute("class","skillProgressBar");

    let skillProgress = document.createElement("div");
    skillProgress.setAttribute("class","skillProgress");
    skillProgress.style.width = skillValue + "%";
    skillProgress.style.backgroundColor = "green";
    skillProgress.innerHTML = skillValue + "%";
    skillProgress.style.height = "100%"

    let skillValueElement = document.createElement("div");
    skillValueElement.setAttribute("class","skillValue");
    skillValueElement.innerText = skillValue + "%";
    

    //remove button

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.setAttribute("class", "btnRemove");
    removeButton.addEventListener("click", function () {
        skillCon.removeChild(skill);
    });


    skillProgressBar.appendChild(skillProgress);
    skill.appendChild(skillNameElement);
    skill.appendChild(skillProgressBar);
    skill.appendChild(skillValueElement);
    skill.appendChild(removeButton);

    skillCon.appendChild(skill);

    skillNameInput.value = "";
    skillValueInput.value = "";
    errorMessage.innerText = "";
});