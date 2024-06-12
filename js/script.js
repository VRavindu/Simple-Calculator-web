// document.addEventListener('keydown', function(event) {
//     var keyPressed = event.key;
//     if (!isNaN(parseInt(keyPressed))) {
//         document.getElementById('display').textContent = keyPressed;
// }});

const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    display.value = eval(display.value)
}

function clearDisplay() {
    display.value = " ";
}