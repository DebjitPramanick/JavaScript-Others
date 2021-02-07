// Promise
// - Reject
// - Resolve
// - Pending


const func = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            const err = true;

            if (!err) {
                console.log("Promise resolved.");
                resolve();
            }
            else {
                console.log("Promise not resolved.");
                reject("Sorry not fulfilled.");
            }

        }, 1800);
    })
}


func().then(()=>{
    console.log("Thanks for resolving.")
}).catch(()=>{
    console.log("Very bad bro.")
})