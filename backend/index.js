// import cases 

const express = require("express")
const app = express();
const mysql = require("mysql2")
const cors = require("cors")

// port to connect to server 
const port = 3000;
// use case for the connection frontend
app.use(express.json());
app.use(cors())

// origin: "https://test-six-omega-19.vercel.app/"}));

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


 app.get('/employees', (req, res) => {
  const query = 'SELECT * FROM form'; // Replace 'employees' with your table name
  connection.query(query, (error, results) => {
      if (error) {
          console.error('Error fetching employees:', error);
          res.status(500).send('Error fetching employees');
          return;
      }
      res.json(results);
  });
});

app.put('/employees/update/:employee_id', (req, res) => {
  const { employeenmae, dob, designation, salary, experience, phone_number, address, email } = req.body;
  const employee_id = req.params.employee_id;
  const query = 'UPDATE employees SET employeenmae=?, dob=?, designation=?, salary=?, experience=?, phone_number=?, address=?, email=? WHERE employee_id=?';
  connection.query(query, [employeenmae, dob, designation, salary, experience, phone_number, address, email, employee_id], (error, results) => {
      if (error) {
          console.error('Error updating employee:', error);
          res.status(500).send('Error updating employee');
          return;
      }
      res.status(200).send('Employee updated successfully');
  });
});



app.delete('/employees/delete/:employee_id', (req, res) => {
  const employee_id = req.params.employee_id;
  const query = 'DELETE FROM form WHERE employee_id = ?';
  connection.query(query, [employee_id], (error, results) => {
      if (error) {
          console.error('Error deleting employee:', error);
          res.status(500).send('Error deleting employee');
          return;
      }
      res.status(200).send('Employee deleted successfully');
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