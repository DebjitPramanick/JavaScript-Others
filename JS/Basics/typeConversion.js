
// Integer to String

let num = 34;
console.log(num);

let numString = String(num);
console.log(typeof numString);


// Object to String

let date = String(new Date());
console.log(date, (typeof date));


// Array to String

let arr = [1,8,6,3,2,6,7];
console.log(String(arr), typeof(String(arr)))



//.toString() method also works

let number = 1561689;
console.log(number,number.toString().length);




// Number(param) works for conversion to number

let num_String = Number("54698513")
console.log(numString, (typeof num_String))

// parseInt() returns only intger value of any number

let parsed_num = parseInt("3254.586");
console.log(parsed_num);

let parsed_float = parseFloat("3254.586")
console.log(parsed_float.toFixed(1))
