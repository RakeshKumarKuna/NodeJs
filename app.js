var fs=require("fs");
var express = require("express");
var dotenv=require("dotenv");
dotenv.config();
let app = express();
const port = process.env.PORT || 3006;
 const morgan = require("morgan");
 app.use(morgan('short',{stream:fs.createWriteStream("./app.log")}));
  app.use(express.static(__dirname + "./public"))
  app.set('views','./src/Views');
  app.set('view engine', 'ejs');
let products  =express.Router();
 app.get("/",function(req,res){
     //res.send("data");
     res.render('index',{name:"rakesh kumar kuna"});
 });
products.route("/").get(function(req,res){
 res.send("all products");
});
products.route("/productid").get(function(req,res){
    res.send("id specific  product detailes");
   });
   products.route("/deleteid").get(function(req,res){
    res.send("id specific  product deleted");
   });
app.use("/",products);
app.listen(port,function(){
    console.log("server started now");
});