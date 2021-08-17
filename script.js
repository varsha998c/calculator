function clearScreen() {
    document.getElementById("final-result").value = "";
}
function display(value) {
    document.getElementById("final-result").value += value;
}
function calculate() {
    var x = document.getElementById("final-result").value;
    var y = eval(x);
    document.getElementById("final-result").value = y;
}
