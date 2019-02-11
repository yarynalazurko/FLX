
function getMin() {
    var arr = arguments;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            arr[0] = arr[i];
        }
    }
    return arr[0];
}
getMin(3, 0, -3);