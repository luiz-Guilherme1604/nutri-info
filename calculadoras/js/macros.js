
let impPdct = document.getElementById("import-pdct");

impPdct.addEventListener("click", importPdct);

let macroSplitDisplay = document.getElementById("choose-macro");
macroSplitDisplay.classList.add("hide"); 

function importPdct() {
    
    if (isNaN(localStorage.pdct)) {
        alert("Por favor, complete o cálculo do PDCT na página anterior antes de prosseguir");
        document.getElementById("pdct-box").innerHTML = "";
        return;
    }
    document.getElementById("pdct-box").innerHTML = localStorage.pdct;
    macroSplitDisplay.classList.remove("hide");
}

let toFinalStepBtn = document.getElementById("toFinalStepBtn");
let yourMacrosSection = document.getElementById("yourMacrosSection");

let macroChoice = document.getElementById("calculate-macros");
macroChoice.classList.add("hide");

macroChoice.addEventListener("click", splitMacros);

let macroArray = document.getElementsByName("macro_choice");

const radios = document.querySelectorAll("input[name='macro_choice']");

radios.forEach((radio) => {
    radio.addEventListener("click", checkRadio);
});

function checkRadio() {

    macroChoice.classList.remove("hide");
}

let chosenOption;


function splitMacros(event) {

    event.preventDefault();

    if (!localStorage.getItem("pdct")) {
        alert("Por favor, complete o cálculo do PDCT na página anterior antes de prosseguir");
        return;
    }

    let pdct = parseInt(localStorage.pdct, 10);
    let protein = 0, carbs = 0, fat = 0;

    if (macroArray[0].checked) {
        chosenOption = "standard";
        protein = Math.floor(pdct * 0.25);
        carbs = Math.floor(pdct * 0.45);
        fat = Math.floor(pdct * 0.30);
        localStorage.setItem("macro", "standard");

    } else if (macroArray[1].checked) {
        chosenOption = "highprotein";
        protein = Math.floor(pdct * 0.40);
        carbs = Math.floor(pdct * 0.35);
        fat = Math.floor(pdct * 0.25);
        localStorage.setItem("macro", "highprotein");

    } else if (macroArray[2].checked) {
        chosenOption = "lowcarb";
        protein = Math.floor(pdct * 0.35);
        carbs = Math.floor(pdct * 0.10);
        fat = Math.floor(pdct * 0.55);
        localStorage.setItem("macro", "lowcarb");

    } else {
        
        chosenOption = "notselected";
        alert("Por Favor selecione uma opção de divisão de macronutrientes.");
        return;
    }

    document.getElementById("protein").innerHTML = protein;
    document.getElementById("carbs").innerHTML = carbs;
    document.getElementById("fat").innerHTML = fat;
    document.getElementById("total").innerHTML = pdct;

    yourMacrosSection.classList.remove("hide");
    toFinalStepBtn.classList.remove("hide");
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('import-pdct');
    
    button.addEventListener('click', function() {
        button.classList.add('hide'); 
    });
});
