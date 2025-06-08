// Reference display element
const display = document.getElementById('display');

// Track if we have performed a calculation
let justCalculated = false;

function appaendToDisplay(value) {
    console.log('Button pressed:', value);

    alert('You pressed: ' + value);
}

function clearDisplay() {
    console.log('Clear button pressed.');

    alert('Clear button was clicked');
}