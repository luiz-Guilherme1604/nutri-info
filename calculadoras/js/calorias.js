localStorage.clear();

let pdctSection = document.getElementById("pdct-section");
let nextStepBtn = document.getElementById("buttonBox");
let linkMacro = document.getElementById("link-macro");


let calculatePdct = document.getElementById("calculate-pdct");

calculatePdct.addEventListener("click", calculateCalories);



function calculateCalories(event) {
    
    event.preventDefault();
    
    let bmr;
   
    let multiplier;
    
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const gender = document.getElementById("gender").value;
    const activity = document.getElementById("activity").value;
   
    const ageModal = document.getElementById("ageModal");
    const weightModal = document.getElementById("weightModal");
    const heightModal = document.getElementById("heightModal");
    const genderModal = document.getElementById("genderModal");
    const activityModal = document.getElementById("activityModal");
    
    const ageSpan = document.getElementById("ageSpan");
    const weightSpan = document.getElementById("weightSpan");
    const heightSpan = document.getElementById("heightSpan");
    const genderSpan = document.getElementById("genderSpan");
    const activitySpan = document.getElementById("activitySpan");
   
    if (age < 5 || age > 95) {
        ageModal.style.display = "block";
        ageSpan.onclick = function () {
            ageModal.style.display = "none";
        };
    } else if (weight < 20 || weight > 400) {
        weightModal.style.display = "block";
        weightSpan.onclick = function () {
            weightModal.style.display = "none";
        };
    } else if (height < 100 || height > 250) {
        heightModal.style.display = "block";
        heightSpan.onclick = function () {
            heightModal.style.display = "none";
        };
    } else if (gender == "male") {
        bmr = 66 + (6.3 * weight) + (12.9 * height) - (6.8 * age);
    } else if (gender == "female") {
        bmr = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age);        
    } else if (gender != "male" || gender != "female") {
        genderModal.style.display = "block";
        genderSpan.onclick = function () {
            genderModal.style.display = "none";
        };
    }
   
    if (activity == "sedentary") {
        multiplier = 1.2;
    } else if (activity == "lightlyActive") {
        multiplier = 1.375;
    } else if (activity == "moderatelyActive") {
        multiplier = 1.55;
    } else if (activity == "veryActive") {
        multiplier = 1.725;
    } else if (activity == "extraActive") {
        multiplier = 1.9;
    } else if (multiplier == undefined) {
        activityModal.style.display = "block";
        activitySpan.onclick = function () {
            activityModal.style.display = "none";
        };
    }
    
    let calories = Math.floor(bmr * multiplier);
    
    let answer = document.getElementById("display-pdct");
    
    if (isNaN(calories)) {
        answer.innerHTML = "";
    } else answer.innerHTML = `${calories}!`;

    localStorage.setItem("pdct", calories);
   
    if (localStorage.pdct > 0) {
        pdctSection.classList.remove("hide");
        nextStepBtn.classList.remove("hide");
        linkMacro.classList.remove("hide");
    }
}
