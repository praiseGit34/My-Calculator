// 
const display = document.getElementById("display");
// function to display the input value on the screen when clicked
function appendToDisplay(input) {
    display.value += input;
}
//function to clear the input
function clearDisplay() {
    display.value = "";
}
//function to evaluate
document.getElementById("c").addEventListener("click", clearDisplay);

function calculate() {
    try {
        //use of the eval method
        display.value = eval(display.value);
    } catch(error) {
        display.value = "error";
    }
}