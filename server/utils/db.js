import mysql from 'mysql'

const con=  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_management"
})
 
con.connect(function(err){
    if (err){
        console.log("connection error")
    } else {
        console.log("Connected to your database!!")
    }
})

export default con;