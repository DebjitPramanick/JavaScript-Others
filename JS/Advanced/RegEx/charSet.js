let reg = /De[a-z]jit/
// [a-z] -> Character set
// can be any character from a to z

reg = /De[^aty]ji[tfg]/ // Here ^ means not 
// if characters are aty , expression will not match
reg = /De[^aty]ji[tfg][0-9]/

// Quantifiers
reg = /Deb{3}jit/ // b can occur exactly 3 times
reg = /Deb{0,3}jit/ // b can occur exactly 3 times

// Groupings
reg = /(Deb){2}([0-9]f){3}/ // Deb occurs 2 times

let s = "DebDeb1f5f9f is a developer.."

if (reg.test(s)) {
    console.log(`The string "${s}" matches this expression ${reg.source}.`)
}
else {
    console.log(`Does not matched the expression ${reg.source}.`)
}