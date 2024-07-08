function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculate() {
    const display = document.getElementById('display');
    try {
        if (display.value.includes('%')) {
            const parts = display.value.split('%');
            if (parts.length === 2) {
                display.value = (parseFloat(parts[0]) * parseFloat(parts[1]) / 100).toString();
            } else {
                display.value = 'Error';
            }
        } else {
            display.value = eval(display.value);
        }
    } catch {
        display.value = 'Error';
    }
}
