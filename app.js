const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.listen(8000)


const random = () => Math.round(Math.random()*129734)


app.get("/info", (req, res) => {
    res.send({number: random()})
})

//pass 1codeAcademy