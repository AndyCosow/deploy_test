const express = require("express")
const app = express()


app.listen(8000)

app.get("/info", (req, res) => {
    res.send({info: "your info"})
})