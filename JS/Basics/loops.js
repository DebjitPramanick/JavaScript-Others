// for(let i=0;i<40;i++){
//     if(i%2!==0) console.log(i);
// }


// forEach to iterate array and objects with ease

let array = [4,8,9,3,5,6];

array.forEach( (e,i,a) => {
    console.log(e,i,a);
})

let b = array.map((a) => a)
console.log("Second array b is", b)

let c = array.filter((a) => a%2 === 0)
console.log("Second array c is", c)

let d = array.reduce((acc,cur) => acc*cur) // -> Will return multiplied result of all elements in the array
console.log("Value of d is", d)

let obj = {
    name: "Debjit",
    pos: "Developer",
    exp: "2 M",
    age: 20
}


for(let k in obj){
    console.log(`The value of ${k} is ${obj[k]}`);
}