console.log("Regular expressions...")

let reg = /Debjit/ // This is a regular expression literal in JS
reg = /Debjit/g // g for global flag for multiple occurences
//reg = /Debjit/i // i for case insensitive

console.log(reg)  //-> /Debjit/
console.log(reg.source) // -> Debjit

// Functions to match expressions

let s = "Debjit is a cool developer. Debjit is great."
// 1. exec() -> this function will return an array for match and null for no match

let res = reg.exec(s)

console.log(res)


// 2. test() -> Return true ot false

let res1 = reg.test(s)
console.log(res1) // true or false

// 3. match() -> Returns an array or null

let res3 = s.match(reg)
console.log(res3)


// 4. search() -> Returns index of first match else -1

let res4 = s.search(reg)
console.log(res4)


// 5. replace() -> Returns new replaced string with all the replacements

let res5 = s.replace(reg, 'Sujan')
console.log(res5)