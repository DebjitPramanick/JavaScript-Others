const express = require('express')

const route = express.Router();

const arr = [
    {
        name: "React JS",
        exp: 5
    },
    {
        name: "Angular JS",
        exp: 1
    },
    {
        name: "Next JS",
        exp: 3
    },
    {
        name: "Redux JS",
        exp: 4
    },
    {
        name: "Vanilla JS",
        exp: 5
    }
]

route.get(
    '/frameworks',
    async (req,res)=>{
        try {
            const data = arr

            res.send(data);
        } catch (error) {
            console.log(error)
        }
    }
)



module.exports = route