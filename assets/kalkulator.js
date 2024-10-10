let display = document.getElementById('display');
let historyList = document.getElementById('history');

// Function to append values to display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
        addToHistory(display.value);
    } catch (error) {
        alert('Invalid expression');
    }
}

// Function to add the calculation to history
function addToHistory(result) {
    let historyItem = document.createElement('li');
    historyItem.textContent = display.value;
    historyList.appendChild(historyItem);
}
