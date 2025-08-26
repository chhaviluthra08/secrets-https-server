//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let userAuth = false; 
app.use(bodyParser.urlencoded({encoded:true}));

function PassCheck(req, res, next){
    const pass = req.body["password"];
    if (pass==="ILoveProgramming"){
        userAuth = true;
    }
    next();
}
app.use(PassCheck);

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check", (req,res)=>{
    if(userAuth){
        res.sendFile(__dirname+"/public/secret.html");
    }else{
        res.sendFile(__dirname+"/public/index.html");
    }
});

app.listen(port, ()=>{
    console.log("Listening on port 3000");
})