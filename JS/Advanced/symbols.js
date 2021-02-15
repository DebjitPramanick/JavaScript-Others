
const k1 = Symbol('identifier for k1')
const k2 = Symbol('identifier for k2')

obj = {}

obj[k1] = 'Debjit'
obj[k2] = 'Rohan'
obj['exp'] = 'React JS'


// for in loop ignores Symbols

for(let key in obj){
    console.log(obj[key])
    
}