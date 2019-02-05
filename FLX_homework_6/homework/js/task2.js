var amount = Number(prompt("Input amount of money: ", ""));
var discount = Number(prompt("Input the discount: ", ""));

if (amount < 0 || amount > 9999999 || discount < 0 || discount > 99 ||
    isNaN(amount) || isNaN(discount)) {
    alert("Invalid input data");
} else {
    var priceWithDiscount = (amount - (amount * discount / 100));
    var saved = (amount - priceWithDiscount);
    alert("Price without discount: " + +amount.toFixed(2) + "\nDiscount: " + +discount.toFixed(2) + "%" + 
       "\nPrice with discount: " + +priceWithDiscount.toFixed(2) + "\nSaved: " + +saved.toFixed(2))
}