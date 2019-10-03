// require("dotenv").config({ path: __dirname + "./.env" });
const ctrl = require("./controller")
const express = require("express")
const app = express()
const cors = require('cors')
// const {SERVER_PORT} = process.env
app.use(express.json())
app.use(cors())
/// endpoints here
app.get("/api/list", ctrl.read)

app.post("/api/list", ctrl.add)

app.put("/api/list/:id", ctrl.edit)

app.delete("/api/list/:id", ctrl.delete)

app.listen(5555, () => {
    console.log(`Listening on port: 5555`)
})