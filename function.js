 //variable declaration ; 

let fullName = "Ali Husnain"; //let variables can not re-declared the scope of a block or statement is limited, 

fullName = "Husnain bahtti"; // update value 

var lastName = "Husnain";
// the var keyword,which declares a variable globally, or locally to an entire function regardless of block scope.

const firstName  = "Ali"
// const variables can neither be updated nor re-declared

document.write(fullName + "</br>");

document.write(lastName+ "</br>");

document.write(firstName + "</br>");



//Check ASCII code a character or Integer
/*
 
let string = prompt("Enter The character" );//enter a character

let result = string.charCodeAt(0); //check the value character

document.write(result); // print ASCII value
*/

// Addtion to Number //////////////////////////////////////
/*
let firstNum = parseInt(prompt("Enter the 1st number"));

let secondNum =  parseInt(prompt("Enter the 2nd number"));

resultNum = firstNum + secondNum ;

document.write(resultNum);
*/

///////////////////////DataType////////////////////////////

var int , char , float , _NaN , object , array, undefine;

int = 5;
document.write(typeof(int) + "</br>");

char = "Husnain";
document.write(typeof(char) + "</br>");

float = 23.44;
document.write(typeof(float) + "</br>");


document.write(typeof(undefine) + "</br>");

array = [1,4,'dks']; 
document.write(typeof(array) + "</br>");

object = {
    car: 'ooo',
    call: 'phone'
}
document.write(typeof(object) + "</br>");
_NaN = 10;

var result = document.write(isNaN(_NaN) + "</br>");



