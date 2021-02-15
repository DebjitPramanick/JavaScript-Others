const map = new Map();

let key1 = 'name'
let key2 = 'age'
let key3 = 'func'

// Setting map values

map.set(key1, "Debjit")
map.set(key2, 21)
map.set(key3, function () {
    console.log("Debjit is a good developer.")
})

console.log(map)