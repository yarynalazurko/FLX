// Your code goes here
var isConfirm = confirm("Do you want to play a game?");
if (!isConfirm) {
    alert("You did not become a millionaire, but can");
}
var maxRand = 5;
var firstPrize = 10;
var secondPrize = 0;
var thirdPrize = 0;
var totalPrize = 0;
var possiblePrize = 0;

while (isConfirm) {
    var rand = Math.floor(Math.random() * (maxRand - 0 + 1)) + 0;
    secondPrize = Math.floor(firstPrize / 2);
    thirdPrize = Math.floor(secondPrize / 2);

    var i = 3;

    while (i >= 1) {
        if (i === 3) {
            possiblePrize = firstPrize;
        } else if (i === 2) {
            possiblePrize = secondPrize;
        } else if (i === 1) {
            possiblePrize = thirdPrize;
        }

        var userNumber = Number(prompt("Enter a number from 0 to " + maxRand +
            "\nAttempts left: " + (i) +
            "\nTotal prize: " + totalPrize + "$" +
            "\nPossible prize on curent attempt: " + possiblePrize + "$", ""));

        if (userNumber === rand) {
            if (i === 3) {
                totalPrize += firstPrize;
            } else if (i === 2) {
                totalPrize += secondPrize;
            } else if (i === 1) {
                totalPrize += thirdPrize;
            }
            break;
        }
        i--;
    }
    if (userNumber === rand) {
        var isConfirmContinue = confirm("Congratulation! Your prize is: "+ totalPrize + 
"$" + "\nDo you want to continue a game?");
        if (isConfirmContinue) {
            maxRand = maxRand * 2;
            firstPrize = firstPrize * 3;
        } else {
            alert("Thank you for a game. Your prize is: " + totalPrize + "$");
            var isConfirmAgain = confirm("Do you want to play a game again?");
            if (!isConfirmAgain) {
                break;
            }
            maxRand = 5;
            totalPrize = 0;
            firstPrize = 10;
        }
    } else {
        maxRand = 5;
        totalPrize = 0;
        firstPrize = 10;
        alert("Thank you for a game. Your prize is: " + totalPrize + "$");
        isConfirmAgain = confirm("Do you want to play a game again?");
        if (!isConfirmAgain) {
            break;
        }
    }
}