const fs = require('fs');

const data = [
    {
        name: "Debjit Pramanick",
        age: 21
    },
    {
        name: "Rajib Pramanick",
        age: 34
    },
    {
        name: "Surajit Pramanick",
        age: 24
    },
    {
        name: "Rohan Datta",
        age: 21
    },
    {
        name: "Debajeet Acharya",
        age: 20
    }
]

// Convert this object into JSON

const JSONData = JSON.stringify(data); // This will not work

// Create a file with fs module and store JSON data their
// fs.writeFile("json.json", JSONData, (err) => {
//     console.log("Done");
// })

// Now read file

fs.readFile("json.json", "utf8", (err,data) => {
    // console.log(data)
    const bioData = JSON.parse(data);
    console.log(bioData)
})