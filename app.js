require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())


app.get('/:ss', (req, res) => {
    res.statusCode = 200
    if(req.params.ss=='search'){
        res.send('Waa lode')
    }else{
        res.send('nahi na lode')
    }
    console.log(req)
    console.log(req.params, typeof(req.params.ss))
    console.log(res.statusCode)
})
app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Listing on ${PORT}`)
    }
})





