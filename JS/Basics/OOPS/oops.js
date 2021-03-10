

// ------------------------------------------------------------------------- CREATING OBJECTS -------------------------------------------------------------------------


// Creating objects using object literals

const tehnology = {
    name: "React",
    type: "JS Framework",
    run: () => {
        console.log("Running React.");
    }
}

// ------------------------------------------------------------------------- CREATING CONSTRUCTOR -------------------------------------------------------------------------

function GenerateTechnology(name, type){
    this.name = name;
    this.type = type;
    this.run = function(){
        console.log(`Running ${this.name}`)
    }
}



// ------------------------------------------------------------------------- CREATING PROTOTYPE -------------------------------------------------------------------------


GenerateTechnology.prototype.getName = () => {
    return this.name;
}
GenerateTechnology.prototype.setName = (name) => {
    return this.name = name;
};



technology1 = new GenerateTechnology("Angular","JS Framework");
technology2 = new GenerateTechnology("Vue", "JS Framework");




// ------------------------------------------------------------------------- CREATING OBJECT WITH OWN PROTOTYPE -------------------------------------------------------------------------



const proto = {
    slogan: function(){
        return `This company is the best.`;
    },
    changeName: function(name){
        this.name = name
    }
}



const debjit = Object.create(proto, {
    name: {value: "Debjit", writable: true}, // For writable true name can be changed
    role: {value: "Developer"}
})



// This also create Objects


const sujan = Object.create(proto);

sujan.name = "Sujan";
sujan.role = "Develoepr"


console.log(debjit)
console.log(sujan)



// ------------------------------------------------------------------------- CREATING ANOTHER CONSTRUCTOR -------------------------------------------------------------------------

function Employee(name,salary,experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience
}

// This will add prototype function

Employee.prototype.slogan = function(){
    return `This company is the best. Regards, ${this.name}`
}

let deba = new Employee("Debajeet Acharya", 56000, 3)

console.log(deba)




// ------------------------------------------------------------------------- CREATING ANOTHER CONSTRUCTOR INHERITTING PROPERTIES OF EMPLOYEE -----------------------------------------

function Programmer(name,salary,experience,language){
    Employee.call(this, name,salary,experience);
    this.language = language;
}


// Inherit the prototype

Programmer.prototype = Object.create(Employee.prototype)

// Manually set the constructor

Programmer.prototype.constructor = Programmer



let rohan = new Programmer("Rohan",40800,2,"Python")

console.log(rohan)



