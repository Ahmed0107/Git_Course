// Array Object Methods and Properties

// TODO: Array Object Properties

// First of all : How Can We Create a Array in JS?

// 1- Using leteral creation witch return a object (the type of creation will be a object)
var myArr = [1, 2, false, 5.6, , [4, 5, {}]]

//add a new index to my array
myArr[10] = 12

// 2- Using Constructot creation witch return a object (the type of creation will be a object)
var newArr = new Array()
newArr[0] = 2
newArr[1] = "HI"
newArr[2] = true
newArr[3] = [4, 5, 6.5, "Aaash"]

// 3- Using Dense Array creation witch return a object (the type of creation will be a object)
var newDeseArr = new Array("red", "blue", "green")

//now log the type of the above variables
console.log(typeof myArr);
console.log(typeof newArr);
console.log(typeof newDeseArr);

//The Array Object has one property called a "length"
console.log(myArr.length);


// TODO: Array Object Metodes

var newMArr = new Array()
newMArr[0] = 1
newMArr[1] = 3
newMArr[2] = 10
newMArr[3] = 315
newMArr[4] = 30
newMArr[5] = "new Value"

//joik methode convert array to string or join the items of array
console.log(newMArr.join(""));

//pop method remove the last index from array
console.log(newMArr.pop());
console.log(newMArr);

//push method add item at last index of array
console.log(newMArr.push("AHmed"));
console.log(newMArr);

//shift method remove the first index from array
console.log(newMArr.shift());
console.log(newMArr);

//unshift method add item at first index of array
console.log(newMArr.unshift("abc"));
console.log(newMArr);

// TODO: Associative Array Object

// Associative Array has no methode or properties becuase it has not store items with indexes but with key value paires

var associativeArray = new Array()

associativeArray["first name"] = "Ahmed"
associativeArray["last name"] = "Ali"
associativeArray["age"] = 27

for(i in associativeArray){
    console.log(i + " " + associativeArray[i]);
}
