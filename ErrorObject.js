/*
Error Object six types

1- SynatxError
2- TypeError
3- RangeError
4- ReferanceError
5- evalError
6- URIError
*/

var syntaxErrbtn = document.getElementById("syntaxErrbtn")
var typeErrbtn = document.getElementById("typeErrbtn")
var rangeErrbtn = document.getElementById("rangeErrbtn")
var customErrbtn = document.getElementById("customErrbtn")
var handleErrbtn = document.getElementById("handleErrbtn")


// 1- SynatxError
// alert("hello")

syntaxErrbtn.addEventListener('click', ()=> {
    alert("hello")
})

typeErrbtn.addEventListener('click', ()=> {
    console.logg("Ahmed");
})

rangeErrbtn.addEventListener('click', ()=> {
    console.log((123.45).toFixed(101));
})

customErrbtn.addEventListener('click', ()=> {
    var myErr = new Error("Hi From new Error")
    console.log(myErr.name);
    console.log(myErr.message);
})

handleErrbtn.addEventListener('click', ()=> {

    var res = parseInt(prompt("Enter Your age"))

    try{
        if (res == 10) 
            throw "out of range"
        
        else if (res > 20) 
            throw new RangeError("out of range")
         else 
            alert("values are not ,,,,,")
        
    } catch(err){
        console.log("nice");
        console.log(err.name);
    }

    // here the finally keyword بتجبر ان الكود اللي و فاينالي لازم يتنفذ حتي لو كان فيه ايرور في التراي والكاتش
    finally {
        console.log("done");
    }

    // no code will be excutes after finally keyword
    console.log("other code");

})



