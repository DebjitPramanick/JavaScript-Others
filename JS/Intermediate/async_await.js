console.log("Thi is async await operation...")

const debjit = async () => {
    console.log("This is function.")
    return "Debjit";
}


console.log("Before calling function.")
let a = debjit();
console.log("After calling debjit.");
console.log(a) 

