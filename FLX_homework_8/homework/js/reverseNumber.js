
function reverseNumber(num) {
    num = String(num);
    var reverseNum = "";
    for (var i = num.length - 1; i >= 0; i--) {
        reverseNum += num[i];
    }
    return parseInt(reverseNum) * Math.sign(num);
}
reverseNumber(10000);