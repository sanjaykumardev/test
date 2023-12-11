function handleSubmit() {
  // Get form values
  const employeenmae = document.getElementById("employeeName").value;
  const dob = document.getElementById("dob").value;
  const designation = document.getElementById("designation").value;
  const salary = document.getElementById("salary").value;
  const experience = document.getElementById("experience").value;
  const employee_id = document.getElementById("employeeId").value;
  const phone_number = document.getElementById("phoneNumber").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;

  // // Check for empty required fields
  if (!employeenmae || !dob || !designation || !employee_id || !phone_number || !email) {
    alert("Please fill in all required fields:");
    return; 
}


  // URL for the server to connect to the database:
  const URL = "http://localhost:3000";

  // Data to fetch in the backend:
  const data = {
      employeenmae,
      dob,
      designation,
      salary,
      experience,
      employee_id,
      phone_number,
      address,
      email
  };

  // Sending data to server
  axios.post(URL + '/post', data)
      .then(response => {
          console.log('Data sent to the server:', response.data);
          // Display the received data as a table row
      })
      .catch(error => {
          console.error('Error:', error);
      });

  // Create a new table row
  const table = document.getElementById("employeeTable");
  const newRow = table.insertRow(table.length);

  const cells = [employeenmae, dob, designation, salary, experience, employee_id, phone_number, address, email];
  for (let i = 0; i < cells.length; i++) {
      const cell = newRow.insertCell(i);
      cell.innerHTML = cells[i];
      cell[i] = [...cell.innerHTML]
  }

  // Reset input fields to empty strings
  document.getElementById("employeeName").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("designation").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("experience").value = "";
  document.getElementById("employeeId").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
}

