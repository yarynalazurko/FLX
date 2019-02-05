var a = Number(prompt("Input a: ", ""));
var b = Number(prompt("Input b: ", ""));
var c = Number(prompt("Input c: ", ""));

if (isNaN(a) || isNaN(b) || isNaN(c) ||
    a === 0 || !isFinite(a) || !isFinite(b) || !isFinite(c)) {
    alert("Invalid input data");
} else {
    var d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        alert("No solution");
    } else if (d === 0) {
        var x = -b / 2 * a;
        alert("x = " + x);
    } else {
        var x1 = (-b + Math.sqrt(d)) / (2 * a);
        var x2 = (-b - Math.sqrt(d)) / (2 * a);
        alert("x1 = " + x1 + "; " + "x2 = " + x2);
    }
}