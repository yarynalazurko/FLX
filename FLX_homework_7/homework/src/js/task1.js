// Your code goes here
var userLogin = prompt("Input login: ", "");

if (userLogin === null || userLogin === '') {
    alert("Canceled!");
} else if (userLogin.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (userLogin === "User" || userLogin === "Admin") {
    var userPswd = prompt("Input password:", "");
    if (userLogin === null || userLogin === '') {
        alert("Canceled!");
    } else if ((userLogin === "User" && userPswd === "UserPass") || 
(userLogin === "Admin" && userPswd === "RootPass")) {
        if (new Date().getHours() < 20) {
            alert("Good day, dear " + userLogin);
        } else {
            alert("Good evening, dear " + userLogin);
        }
    } else {
        alert("Wrong password!")
    }
} else {
    alert("I don’t know you");
}