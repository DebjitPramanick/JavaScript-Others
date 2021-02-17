const express = require('express');
const path = require('path')
const cors = require('cors')
const framworkRoute = require('./Routers/framework.js')

const app = express();
app.use(cors())


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server created at ${port}.....`))
const filePath = path.join(__dirname, "./views")

// To set the view engine

app.set("view engine","hbs")
app.get('/', (req,res)=>{
    res.render('index.hbs')
})

app.use(express.static(filePath))
app.get('/',(req,res)=> {
    res.send("Server connected....")
})


app.use('/api',framworkRoute);
