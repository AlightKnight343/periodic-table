const express = require("express")
const pug = require("pug")
const app = express()
const sass = require('node-sass');
const sassMiddleware = require('node-sass-middleware');
const path = require("path")
app.use(express.static(__dirname + '/public'));
const PORT = process.env.PORT || 3000




app.set('views','./views');

app.set("viewengine", "pug")

app.get("/", (req, res)=>{
    res.render("index.pug")
})



app.listen(PORT, ()=>{
    console.log("App is online");
})

