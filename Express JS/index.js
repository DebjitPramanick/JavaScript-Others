const express = require('express');
const cors = require('cors')
const framworkRoute = require('./Routers/framework.js')

const app = express();
app.use(cors())


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server created at ${port}.....`))
app.get('/',(req,res)=> {
    res.send("Server connected....")
})


app.use('/api',framworkRoute);