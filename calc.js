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