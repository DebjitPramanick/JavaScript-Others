const set = new Set();

// Set stores unique values

console.log(set)


set.add('Debjit')
set.add('Debjit')
set.add('Rohan')
set.add('Punam')


const set2 = new Set()

console.log(set)

console.log(set.size)
console.log(set.has('Rohan'))
set.delete('Debjit')
console.log(set)

for(let item of set){
    console.log(item)
}

const array = Array.from(set)

console.log(array)