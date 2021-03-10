// Usually you lose access to variables when a function returns. A closure is a way of keeping access to variables in a function after that function has returned.

const obj = function(){
    let i = 0

    return {
        setI(k){
            i = k;
        },
        getI(){
            return i;
        }
    }
}


let x = obj()
console.log("First value:",x.getI())
x.setI(4)
console.log("Second value:",x.getI())

console.log({} + {})