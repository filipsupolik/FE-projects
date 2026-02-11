const display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value !== 'Error') {
        display.value += value;
    } else {
        display.value = value;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}