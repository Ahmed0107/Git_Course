// String Object Methods and Properties

// TODO: String Object Properties

// First of all : How Can We Create a String in JS?

// 1- Using leteral creation witch return a string (the type of creation will be a string)
var myStr = "Welcome to JavaScript"

// 2- Using Constructot creation witch return a object (the type of creation will be a object)
var newStr = new String("A JavaScript String Object")

// Another form from constructor creation
var str = String("A JavaScript string")

//now log the type of the above variables
console.log(typeof myStr);
console.log(typeof newStr);
console.log(typeof str);

//The String Object has one property called a "length"
console.log(str.length);


// TODO: String Object Metodes

var strMethod = "Welcome to javaScript String methods"

console.log(strMethod.charAt(0));

console.log(strMethod.charAt(strMethod.length-1));

console.log(strMethod.indexOf("J"));

console.log(strMethod.lastIndexOf("m"));

console.log(strMethod.substring(5,12));

console.log(strMethod.split(""));

console.log(strMethod.split(" "));

console.log(strMethod.replace("a" , "_"));


// TODO: Regular Experssion Pattern or RegExp

/*
 "/patern/flag"
 لو انا عايز اغير حرفين ورا بعض زي
 sc مثلا
 هتكتب كا 
 /sc/g

 regexp flags
 g => global هيمشي علي الاسترينج كله
 i => for case senstive
 m => for multi lines
 */ 

 var strRegExp = "how about ha ha and ha ha"

 console.log(strRegExp.replace(/ha/gmi , "_"));
