let reg = /Debjit/
reg = /^De/ // ^ -> starts with meta character
reg = /y.$/ // $ -> ends with meta character
reg = /D.bji/ // . -> matches exactly one character
reg = /D*bji/ // . -> matches 0 or greater than 1 character
reg = /de?bji?/ // ? -> matches optional character

let string = "Deeeebjit is a great developer. Debjit is a good boy."

let res = reg.exec(string);

console.log("The result is  : ", res);

if(reg.test(string)){
    console.log(`The string "${string}" matches this expression ${reg.source}.`)
}
else{
    console.log(`Does not matched the expression ${reg.source}.`)
}