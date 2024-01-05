const express = require("express");
const app = express();
//const port = 3000
const mysql = require("./database").con

app.get("/adddata",(req,res) => {

    var emp = req.body
    var empdata = [emp.name,emp.Mobile_No,emp.E_mail,emp.Aadhar_no,emp.car_name,emp.location,emp.Travel_Duration,emp.No_of_quantity]
    con.query("insert into cars_details(Name,Mobile_No,E_mail,Aadhar_no,Address,Car_Name,location,Travel_Duration,No_Of_quantity) values (?,?,?,?,?,?,?,?)",[empdata],(err,rows)=>{
    if (err){
        console.log(err)
    }
    else{
    res.send(rows);
    }
})
})
app.listen(3000)