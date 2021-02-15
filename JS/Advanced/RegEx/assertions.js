let reg = /D(?=e)/

let s = "Debjit is a developer.."

if (reg.test(s)) {
    console.log(`The string "${s}" matches this expression ${reg.source}.`)
}
else {
    console.log(`Does not matched the expression ${reg.source}.`)
}