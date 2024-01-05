
var mysql = require('mysql');
//const router=express.router;

//router.post("/")






const con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"surya@2003",
    database:"cars_details",
    port:3000                                                                                         
});
con.connect((err)=>{
    if (err) throw err;
    console.log("connected  ......!!");
});



/*
   var sql="insert into cars_details(Name,Mobile_No,E_mail,Aadhar_no,Address,Car_Name,location,Travel_Duration,No_Of_quantity) values (?,?,?,?,?,?,?,?)";
   con.query(sql,function(err,rows){
    if (err) throw err;
    console.log('1 Record Inserted',rows);
});
*/


module.exports.con = con;