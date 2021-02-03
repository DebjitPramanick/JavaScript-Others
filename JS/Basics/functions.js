function greet(name){
    return `Good morning, ${name}!`;
}

let s = greet("Dejbit");

console.log(s);


// Functions in objects


const fObj = {
    name: "Debjit",
    draw: () => {
        return "Debjit is drawing";
    }
}


console.log(fObj.draw())
