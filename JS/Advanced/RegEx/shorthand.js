let reg = /\wjit/ // \w -> Word character = _ or alphabet or numbers
reg = /\w+ebjit/  // \w+ means one or more word character

reg = /\Wjit/ // \W -> Non word character
reg = /\W+jit/ // \W+ -> More than one non-word characters
reg = /Deb\d967/ // \d -> It means digit (\d = 1,2,3....9)
reg = /Deb\d+967/ // \d+ -> It means digit (\d+ = 448444)
reg = /Deb\D12345/ // \D -> Non-digits
reg = /Deb\D+5468/ // \D+ -> More than 1 non-digits
// \s -> Whitespace characaters
// \s+ -> More than one non-digit characters
// \S and \S+ -> Non-white space characters
// \b -> Word boundary

let s = "DebP12345"

if (reg.test(s)) {
    console.log(`The string "${s}" matches this expression ${reg.source}.`)
}
else {
    console.log(`Does not matched the expression ${reg.source}.`)
}