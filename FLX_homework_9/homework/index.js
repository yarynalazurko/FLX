//Taks 1
function findTypes() {	
	var types = [];
	for (var i = 0; i < arguments.length; i++) {
		types.push(typeof arguments[i]);
	}
	return types;
}

findTypes(null, 5, "hello");

//Task 2
function executeforEach(arr, callBack) {
    for (var i = 0; i < arr.length; i++) {
        callBack(arr[i]);
    }
}

executeforEach([1,2,3], function(el) { 
	console.log(el) 
}) 

//Task 3
function mapArray(arr, callBack) {
	var transformedArr = [];
	executeforEach(arr, function(num) {
		transformedArr.push(callBack(num))
	})
	return transformedArr;
}

mapArray([2, 5, 8], function(el) { 
	return el + 3 
})

//Task 4
function filterArray(arr, callBack) {
	var filteredArr = [];
	executeforEach(arr, function(num) {
        if (callBack(num)) {
            filteredArr.push(num);
        }
    })
    return filteredArr;
}

filterArray([2, 5, 8], function(el) { 
	return el > 3 
})

var data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
]

//Task 5
function getAmountOfAdultPeople(arr){
	var amountOfAdult = filterArray(arr, function(el) {
		return el.age > 18;
	})
	return amountOfAdult.length;
}

getAmountOfAdultPeople(data); 

//Task 6
function getGreenAdultBananaLovers(arr) {
	var nameofLovers = filterArray(arr, function(el) {
		return el.age > 18 && el.favoriteFruit === "banana" && el.eyeColor === "green";
	});
	nameofLovers = mapArray(nameofLovers, function (el) {
        return el.name;
    })
    return nameofLovers;
}

getGreenAdultBananaLovers(data);

//Task 7
function keys(obj) {
	var arrOfKeys = [];
	for (var key of Object.keys(obj)) {
		if(obj.hasOwnProperty(key)) {
			arrOfKeys.push(key);
		}
	}
	return arrOfKeys;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3}) 

//Task 8
function values(obj) {
	var arrOfValues = [];
	for (var value of Object.values(obj)) {
	if(value) {
			arrOfValues.push(value);
		}
	}
	return arrOfValues;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3}); 

//Task 9
function showFormattedDate(date){
	var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jan", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var day = date.getDate();
	var month = monthArr[date.getMonth()];
	var year = date.getFullYear();

	return `Date: ${day} of ${month}, ${year}`;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));

//Task 10
function isEvenYear(date) {
	var year = date.getFullYear();
	return year % 2 === 0;
}

isEvenYear(new Date('2019-01-27T01:10:00')); 

//Task 11
function isEvenMonth(date) {
	var month = date.getMonth() + 1;
	return month % 2 === 0;
}

isEvenMonth(new Date('2019-02-27T01:10:00'));