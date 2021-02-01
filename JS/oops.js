// Creating objects using object literals

const tehnology = {
    name: "React",
    type: "JS Framework",
    run: () => {
        console.log("Running React.");
    }
}

// Creating constructor

function GenerateTechnology(name, type){
    this.name = name;
    this.type = type;
    this.run = function(){
        console.log(`Running ${this.name}`)
    }
}



// Creating prototype


GenerateTechnology.prototype.getName = () => {
    return this.name;
}
GenerateTechnology.prototype.setName = (name) => {
  return this.name = name;
};



technology1 = new GenerateTechnology("Angular","JS Framework");
technology2 = new GenerateTechnology("Vue", "JS Framework");

console.log(technology1);
console.log(technology2);



