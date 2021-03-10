// ------------------------------------------------------------------------- CREATING CLASS -------------------------------------------------------------------------


class Employee {

    constructor(name, experience, salary) {
        this.name = name,
        this.experience = experience,
        this.salary = salary
    }

    isSeniorDev(){
        return true;
    }

    getJoiningYear(){
        let date = new Date();
        return date.getFullYear() - this.experience;
    }

    // Static method does not take any variable from contructor

    static add(a,b){
        return a+b;
    }
}



// ------------------------------------------------------------------------- CREATING NEW CLASS WITH INHERITANCE-------------------------------------------------------------------------

class Programmer extends Employee{
    constructor(name, experience, salary,type,language){
        super(name, experience, salary); // super calls the constructor of main classs

        this.type = type;
        this.language = language
    }

    favLang(){
        if(this.language == "Python")
            return "Python";
        else return "JavaScript"
    }


    // In static method we cannot use 'this' keyword
    static multiply(a,b){
        return a*b;
    }

}




// ------------------------------------------------------------------------- CREATING OBJECT WITH CLASS-------------------------------------------------------------------------

debjit = new Employee("Debjit", 10, 65000)

console.log(debjit)
console.log(Employee.add(5,8))