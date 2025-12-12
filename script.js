let currentValue ="";
function press(value) {
    currentValue +=value;
    document.getElementById("display").value = currentValue
}

function calculate() {
    try {
        let result = eval(currentValue);
        document.getElementById("display").value=result;
        currentValue = result.toString();
    } catch (error) {
        document.getElementById("display").value="ERROR";
    }
}

function clearDisplay() {
    currentValue="";
    document.getElementById("display").value="";
}