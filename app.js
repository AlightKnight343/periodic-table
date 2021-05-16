const express = require("express")
const pug = require("pug")
const app = express()
const sass = require('node-sass');
const sassMiddleware = require('node-sass-middleware');
const path = require("path")
app.use(express.static(__dirname + '/public'));

// app.use(sassMiddleware({
//     src: path.join(__dirname, 'public/stylesheets/sass'),
//     dest: path.join(__dirname, 'public/stylesheets'),
//     debug: true,
//     indentedSyntax: true,
//     outputStyle: 'compressed',
//     prefix: '/stylesheets'
//   }));



app.set('views','./views');

app.set("viewengine", "pug")

app.get("/", (req, res)=>{
    res.render("index.pug")
})



app.listen(3000, ()=>{
    console.log("App is online");
})

