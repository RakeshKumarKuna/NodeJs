
let detailes = require("os");
console.log("platform == >"+ detailes.platform);
console.log("uptime == >"+detailes.uptime);
console.log("hostname == >"+detailes.hostname);
console.log("cpus == >"+detailes.cpus);
console.log(detailes.userInfo.toString)

let file=require("fs");
file.writeFile("java.txt","java is a programming language",function(data,err){
    if(err){
        throw error;
    }
    console.log("task done")
})
