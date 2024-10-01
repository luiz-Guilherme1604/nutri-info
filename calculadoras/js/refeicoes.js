
const breakfastAllocation = 0.25;
const lunchAllocation = 0.35;
const dinnerAllocation = 0.40;


let generateMealButton = document.getElementById("generate-meals");
let mealDisplayTable = document.getElementById("mealplan-container");
generateMealButton.classList.add("hide");
mealDisplayTable.classList.add("hide");


let selectAll = document.getElementById("selectAll");
selectAll.addEventListener("click", tickAllFoods);


function tickAllFoods() {
    let foods = document.getElementsByTagName("input");
    for (let i = 0; i < foods.length; i++) {
        if (!foods[i].checked) {
            foods[i].checked = true;
        }
    }
    generateMealButton.classList.remove("hide");
}

generateMealButton.addEventListener("click", runMealGenerator);


const proteinInputs = document.querySelectorAll("input[class='protein-input']");
const carbInputs = document.querySelectorAll("input[class='carb-input']");
const fatInputs = document.querySelectorAll("input[class='fat-input']");
const allInputs = document.querySelectorAll("input[type='checkbox']");

allInputs.forEach((input) => {
    input.addEventListener("click", checkAllInputs);
});


function checkAllInputs() {
    
    let p = false,
        f = false,
        c = false;
     
    for (let i = 0; i < proteinInputs.length; i++) {
        
        if (proteinInputs[i].checked) {
            p = true;
            break;
        }
    }
    for (let i = 0; i < fatInputs.length; i++) {
        if (fatInputs[i].checked) {
            f = true;
            break;
        }
    }
    for (let i = 0; i < carbInputs.length; i++) {
        if (carbInputs[i].checked) {
            c = true;
            break;
        }
    }
   
    if (p && f && c) {
        
        generateMealButton.classList.remove("hide");
    } else { 
        generateMealButton.classList.add("hide");
        mealDisplayTable.classList.add("hide");
    }
}


function runMealGenerator() {
   
    mealDisplayTable.classList.remove("hide");
    
    let breakfastTotalCalories;
    let lunchTotalCalories;
    let dinnerTotalCalories;
  
    if (localStorage.macro == "standard") {

        breakfastTotalCalories = Math.round(localStorage.pdct * breakfastAllocation);

        document.getElementById('breakfast-total-calories').innerHTML = (breakfastTotalCalories);
        
        document.getElementById('breakfast-protein-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.25));
        document.getElementById('breakfast-carbs-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.45));
        document.getElementById('breakfast-fat-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.30));
        
        lunchTotalCalories = Math.round(localStorage.pdct * lunchAllocation);

        document.getElementById('lunch-total-calories').innerHTML = (lunchTotalCalories);
        
        document.getElementById('lunch-protein-calories').innerHTML = (Math.round(lunchTotalCalories * 0.25));
        document.getElementById('lunch-carbs-calories').innerHTML = (Math.round(lunchTotalCalories * 0.45));
        document.getElementById('lunch-fat-calories').innerHTML = (Math.round(lunchTotalCalories * 0.30));
        
        dinnerTotalCalories = Math.round(localStorage.pdct * dinnerAllocation);
        
        document.getElementById('dinner-total-calories').innerHTML = (dinnerTotalCalories);
        
        document.getElementById('dinner-protein-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.25));
        document.getElementById('dinner-carbs-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.45));
        document.getElementById('dinner-fat-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.30));

    } else if (localStorage.macro == "highprotein") {

        breakfastTotalCalories = Math.round(localStorage.pdct * breakfastAllocation);

        document.getElementById('breakfast-total-calories').innerHTML = (breakfastTotalCalories);
        
        document.getElementById('breakfast-protein-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.40));
        document.getElementById('breakfast-carbs-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.35));
        document.getElementById('breakfast-fat-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.25));

        lunchTotalCalories = Math.round(localStorage.pdct * lunchAllocation);

        document.getElementById('lunch-total-calories').innerHTML = (lunchTotalCalories);
    
        document.getElementById('lunch-protein-calories').innerHTML = (Math.round(lunchTotalCalories * 0.40));
        document.getElementById('lunch-carbs-calories').innerHTML = (Math.round(lunchTotalCalories * 0.35));
        document.getElementById('lunch-fat-calories').innerHTML = (Math.round(lunchTotalCalories * 0.25));

        dinnerTotalCalories = Math.round(localStorage.pdct * dinnerAllocation);

        
        document.getElementById('dinner-total-calories').innerHTML = (dinnerTotalCalories);
        
        document.getElementById('dinner-protein-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.40));
        document.getElementById('dinner-carbs-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.35));
        document.getElementById('dinner-fat-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.25));

    } else if (localStorage.macro == "lowcarb") {

        
        breakfastTotalCalories = Math.round(localStorage.pdct * breakfastAllocation);

        document.getElementById('breakfast-total-calories').innerHTML = (breakfastTotalCalories);
        
        document.getElementById('breakfast-protein-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.35));
        document.getElementById('breakfast-carbs-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.10));
        document.getElementById('breakfast-fat-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.55));

        lunchTotalCalories = Math.round(localStorage.pdct * lunchAllocation);


        
        document.getElementById('lunch-total-calories').innerHTML = (lunchTotalCalories);
        
        document.getElementById('lunch-protein-calories').innerHTML = (Math.round(lunchTotalCalories * 0.35));
        document.getElementById('lunch-carbs-calories').innerHTML = (Math.round(lunchTotalCalories * 0.10));
        document.getElementById('lunch-fat-calories').innerHTML = (Math.round(lunchTotalCalories * 0.55));

        
        dinnerTotalCalories = Math.round(localStorage.pdct * dinnerAllocation);

        document.getElementById('dinner-total-calories').innerHTML = (dinnerTotalCalories);
        
        document.getElementById('dinner-protein-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.35));
        document.getElementById('dinner-carbs-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.10));
        document.getElementById('dinner-fat-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.55));

    }

    const proteinIndex = [{
            "name": "frango",
            "calpergram": 1.51,
        },
        {
            "name": "peru",
            "calpergram": 1.04,
        },
        {
            "name": "peixe",
            "calpergram": 0.86,
        },
        {
            "name": "carne-bovina",
            "calpergram": 1.52,
        },
        {
            "name": "ovos",
            "calpergram": 1.4,
        },
        {
            "name": "carne-de-porco",
            "calpergram": 1.58,
        },
    ];

    const carbIndex = [{
            "name": "pão ",
            "calpergram": 2.51,
        },
        {
            "name": "macarrão",
            "calpergram": 2.04,
        },
        {
            "name": "arroz",
            "calpergram": 1.76,
        },
        {
            "name": "aveia",
            "calpergram": 2.52,
        },
        {
            "name": "cereal",
            "calpergram": 2.4,
        },
        {
            "name": "quinoa",
            "calpergram": 2.58,
        },
    ];

    const fatIndex = [{
            "name": "manteiga",
            "calpergram": 4.51,
        },
        {
            "name": "queijo",
            "calpergram": 4.04,
        },
        {
            "name": "creme",
            "calpergram": 3.76,
        },
        {
            "name": "nozes",
            "calpergram": 4.52,
        },
        {
            "name": "bacon",
            "calpergram": 5.4,
        },
        {
            "name": "azeite-de-oliva",
            "calpergram": 9.58,
        },
    ];

    const proteinFoods = document.getElementsByClassName("protein-input");
    
    let numberOfFoodsProtein = proteinFoods.length;

    let proteinArray = [];

    for (let i = 0; i < numberOfFoodsProtein; i++) {
        if (proteinFoods[i].checked) {
            proteinArray.push(proteinFoods[i].name);
        }
    }

    const rand1 = Math.floor(Math.random() * (proteinArray.length));
    
    const food1 = proteinArray[rand1];

    document.getElementById("breakfast-protein-food").innerHTML = (food1);

    const food1grams = (Math.round(breakfastTotalCalories * 0.25)) / (proteinIndex.find(x => x.name === proteinArray[rand1]).calpergram);

    document.getElementById("breakfast-protein-grams").innerHTML = (Math.round(food1grams));

    const carbFoods = document.getElementsByClassName("carb-input");
    let numberOfFoodsCarbs = carbFoods.length;
    let carbArray = [];

    for (let i = 0; i < numberOfFoodsCarbs; i++) {
        if (carbFoods[i].checked) {
            carbArray.push(carbFoods[i].name);
        }
    }

    const rand2 = Math.floor(Math.random() * (carbArray.length));
    const food2 = carbArray[rand2];
    document.getElementById("breakfast-carbs-food").innerHTML = (food2);
    const food2grams = (Math.round(breakfastTotalCalories * 0.25)) / (carbIndex.find(x => x.name === carbArray[rand2]).calpergram);
    document.getElementById("breakfast-carbs-grams").innerHTML = (Math.round(food2grams));

    const fatFoods = document.getElementsByClassName("fat-input");
    let numberOfFoodsFat = fatFoods.length;
    let fatArray = [];

    for (let i = 0; i < numberOfFoodsFat; i++) {
        if (fatFoods[i].checked) {
            fatArray.push(fatFoods[i].name);
        }
    }

    const rand3 = Math.floor(Math.random() * (fatArray.length));
    const food3 = fatArray[rand3];
    document.getElementById("breakfast-fat-food").innerHTML = (food3);
    const food3grams = (Math.round(breakfastTotalCalories * 0.25)) / (fatIndex.find(x => x.name === fatArray[rand3]).calpergram);
    document.getElementById("breakfast-fat-grams").innerHTML = (Math.round(food3grams));
    document.getElementById("breakfast-total-grams").innerHTML = (Math.round(food1grams + food2grams + food3grams));

    const rand4 = Math.floor(Math.random() * (proteinArray.length));
    const food4 = proteinArray[rand4];
    document.getElementById("lunch-protein-food").innerHTML = (food4);
    const food4grams = (Math.round(lunchTotalCalories * 0.40)) / (proteinIndex.find(x => x.name === proteinArray[rand4]).calpergram);
    document.getElementById("lunch-protein-grams").innerHTML = (Math.round(food4grams));

    const rand5 = Math.floor(Math.random() * (carbArray.length));
    const food5 = carbArray[rand5];
    document.getElementById("lunch-carbs-food").innerHTML = (food5);
    const food5grams = (Math.round(lunchTotalCalories * 0.40)) / (carbIndex.find(x => x.name === carbArray[rand5]).calpergram);
    document.getElementById("lunch-carbs-grams").innerHTML = (Math.round(food5grams));

    const rand6 = Math.floor(Math.random() * (fatArray.length));
    const food6 = fatArray[rand6];
    document.getElementById("lunch-fat-food").innerHTML = (food6);
    const food6grams = (Math.round(lunchTotalCalories * 0.40)) / (fatIndex.find(x => x.name === fatArray[rand6]).calpergram);
    document.getElementById("lunch-fat-grams").innerHTML = (Math.round(food6grams));
    document.getElementById("lunch-total-grams").innerHTML = (Math.round(food4grams + food5grams + food6grams));

    const rand7 = Math.floor(Math.random() * (proteinArray.length));
    const food7 = proteinArray[rand7];
    document.getElementById("dinner-protein-food").innerHTML = (food7);
    const food7grams = (Math.round(dinnerTotalCalories * 0.35)) / (proteinIndex.find(x => x.name === proteinArray[rand7]).calpergram);
    document.getElementById("dinner-protein-grams").innerHTML = (Math.round(food7grams));
   
    const rand8 = Math.floor(Math.random() * (carbArray.length));
    const food8 = carbArray[rand8];
    document.getElementById("dinner-carbs-food").innerHTML = (food8);
    const food8grams = (Math.round(dinnerTotalCalories * 0.35)) / (carbIndex.find(x => x.name === carbArray[rand8]).calpergram);
    document.getElementById("dinner-carbs-grams").innerHTML = (Math.round(food8grams));
    
    const rand9 = Math.floor(Math.random() * (fatArray.length));
    const food9 = fatArray[rand9];
    document.getElementById("dinner-fat-food").innerHTML = (food9);
    const food9grams = (Math.round(dinnerTotalCalories * 0.35)) / (fatIndex.find(x => x.name === fatArray[rand9]).calpergram);
    document.getElementById("dinner-fat-grams").innerHTML = (Math.round(food9grams));

    document.getElementById("dinner-total-grams").innerHTML = (Math.round(food7grams + food8grams + food9grams));
    document.getElementById("total-total-grams").innerHTML = Math.round((food1grams + food2grams + food3grams + food4grams + food5grams + food6grams + food7grams + food8grams + food9grams));
    document.getElementById("total-total-calories").innerHTML = (localStorage.pdct);
    
}