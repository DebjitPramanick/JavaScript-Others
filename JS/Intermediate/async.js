console.log("Asynchronous JS")


// To write Asynchronous code in JS we can use three ways

// 1. Async/Await
// 2. Promises
// 3. Callback Functions


// Synchronous Code


// for (let i = 0; i <= 80000; i++) {
//     console.log(i);
// }

// console.log("Done Printing")


// Asynchronous Code


setTimeout(() => {
    for (let i = 0; i <= 400; i++) {
        console.log(i);
    }
}, 100)


console.log("Done Printing")