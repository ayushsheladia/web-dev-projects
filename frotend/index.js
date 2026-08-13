const express = require("express");
const app = express();
const figlet = require("figlet");
const path=require("path");
const ejs=require("ejs");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../backend/views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

const port = 8080;
let result=[];

app.get("/",(req,res)=>{
    
    res.render("home.ejs",{result});
})

app.post("/", (req, res) => {
    let { text } = req.body;

    figlet(text, function (err, data) {
        if (err) {
            console.log(err);
            return res.send("Error generating figlet");
        }

        result.push(data);
        res.redirect("/");
    });
});

app.listen(port, () => {
    console.log("listen");
});