// fs module of Node.js 


const fs = require("fs")

// Creating a new file with fs core module

// fs.writeFileSync('read.txt', "Let's learn Node.")



// Appending data into a file 

// fs.appendFileSync('read.txt', 'Node is super cool.')


// Read file

// const data = fs.readFileSync('read.txt') // It returns a binary data (Buffer)
// console.log(String(data)) // It return the data


// Rename file

// fs.renameSync('read.txt', 'readwrite.txt');




// ------------------- CRUD OPERATION -------------------//

// 1. Create a folder named "test"
// 2. Create a file in it "Debjit.txt" and put data
// 3. Add more data in the file
// 4. Read the data
// 5. Rename the file
// 6. Now delete both the file and the folder

// fs.mkdirSync('test');
// fs.writeFileSync('test/debjit.txt','My name is Debjit.');
// fs.appendFileSync('test/debjit.txt', 'I am a developer.')
// fs.appendFileSync('test/debjit.txt', 'I am learning Node.js.')
// const text = fs.readFileSync('test/debjit.txt', 'utf8') // utf8 for file encoding
// console.log(text)
// fs.renameSync('test/debjit.txt','test/debjit_dev.txt')
// fs.unlinkSync('test/debjit_dev.txt')
// fs.rmdirSync('test')




