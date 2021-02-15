const fruits = ['Apple', 'Guava', 'Bananna', 'Grapes']

const iterator = (values) =>{
    let nextIndex = 0;
    return {
        next: () => {
            if (nextIndex < values.length){
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else{
                return{
                  done: true  
                }
                
            }
        }
    }
}


// Using iterator

const res = iterator(fruits)
console.log(res.next().value)
console.log(res.next().value)
console.log(res.next().value)
console.log(res.next().value)