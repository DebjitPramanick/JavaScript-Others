// for(let i=0;i<40;i++){
//     if(i%2!==0) console.log(i);
// }


// forEach to iterate array and objects with ease

let array = [4,8,9,3,5,6];

array.forEach( (e,i,a) => {
    console.log(e,i);
})


let obj = {
    name: "Debjit",
    pos: "Developer",
    exp: "2 M",
    age: 20
}


for(let k in obj){
    console.log(`The value of ${k} is ${obj[k]}`);
}