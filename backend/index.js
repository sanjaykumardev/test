const express = require("express")
const app = express();
const mysql = require("mysql2")
const cors = require("cors")

port = 3000

app.use(express.json());
app.use(cors({origin: "https://test-six-omega-19.vercel.app/"}));



// connect to server to database 
const connection  = mysql.createConnection({
  user:"root",
  host:"localhost",
  password:"sanjay007",
  database:"employeeform"

});


// fetch the data to backend 
app.post('/post', (req, res) => {
  const { employeenmae,dob,designation,salary,experience,employee_id,phone_number,address,email} = req.body;
  const date = new Date(dob);

connection.query('INSERT INTO form ( employeenmae,dob,designation,salary,experience,employee_id,phone_number,address, email) VALUES(?,?,?,?,?,?,?,?,?)', [ employeenmae,date,designation, salary,experience, employee_id,phone_number,address,
  email], (err, result) => {
     if (err) {
         console.error('Error inserting data into MySQL:', err);
     }
     console.log('Data inserted into MySQL successfully:', result);
       res.json('successfully')
   });
 });


// connection  to database 
 connection.connect( (err)=>{
  if(err){
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

// app to run server
app.listen(port, (err)=>{
  console.log(`server is running at ${port}`)
})