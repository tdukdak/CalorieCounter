var fatCalorie = 9;
var carbCalorie = 4;
var proteinCalorie = 4;


function init(){
    console.log("Hello World");
    number = document.getElementById("number")
}

function display(){
    number.innerHTML = num;
}

function add() {
    numVar++;
    display();
}

function subtract() {
    if (numVar - 1 > 0)
    {
        numVar--;
        display();
    }
}
