const express = require("express")
const cors = require("cors")
const controller = require("./controller/contact-controller")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    app.use(cors())
    next();
  });

app.post("/add", controller.addContact)
app.put("/edit/:id", controller.editContact)
app.delete("/remove/:id", controller.removeContact)
app.get("/get", controller.getContact)



app.listen(5000,() => console.log("Server started"))