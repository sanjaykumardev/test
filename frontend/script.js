


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
    };
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
        .then(res => {
            console.log('Data sent to the server:', res.data);
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



// function handleSubmit() {
//     const employeenmae = document.getElementById("employeeName").value;
//     const dob = document.getElementById("dob").value;
//     const designation = document.getElementById("designation").value;
//     const salary = document.getElementById("salary").value;
//     const experience = document.getElementById("experience").value;
//     const employee_id = document.getElementById("employeeId").value;
//     const phone_number = document.getElementById("phoneNumber").value;
//     const address = document.getElementById("address").value;
//     const email = document.getElementById("email").value;

//     if (!employeenmae || !dob || !designation || !employee_id || !phone_number || !email) {
//         alert("Please fill in all required fields.");
//         return;
//     }

//     const URL = "http://localhost:3000";
//     const data = {
//         employeenmae,
//         dob,
//         designation,
//         salary,
//         experience,
//         employee_id,
//         phone_number,
//         address,
//         email
//     };

//     axios.post(  URL + '/post', data)
//         .then(response => {
//             console.log('Data sent to the server:', response.data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });

//     const table = document.getElementById("employeeTable");
//     const newRow = table.insertRow(table.length);

//     const cells = [employee_id, employeenmae, dob, designation, salary, experience, phone_number, address, email];
//     for (let i = 0; i < cells.length; i++) {
//         const cell = newRow.insertCell(i);
//         cell.innerHTML = cells[i];
//     }

//     resetForms();
// }

// function resetForms() {
//     document.getElementById("employeeName").value = "";
//     document.getElementById("dob").value = "";
//     document.getElementById("designation").value = "";
//     document.getElementById("salary").value = "";
//     document.getElementById("experience").value = "";
//     document.getElementById("employeeId").value = "";
//     document.getElementById("phoneNumber").value = "";
//     document.getElementById("address").value = "";
//     document.getElementById("email").value = "";
// }

// function deleteEntry(row) {
//     const table = document.getElementById("employeeTable");
//     const index = row.rowIndex;
//     table.deleteRow(index);

//     const idToDelete = row.cells[0].innerHTML;
//     axios.delete(`http://localhost:3000/delete/${idToDelete}`)
//         .then(response => {
//             console.log('Entry deleted successfully:', response.data);
//         })
//         .catch(error => {
//             console.error('Error deleting entry:', error);
//         });
// }

// function editEntry(row) {
//     for (let i = 1; i < row.cells.length; i++) {
//         row.cells[i].contentEditable = true;
//     }

//     const saveButton = document.createElement("button");
//     saveButton.textContent = "Save";
//     saveButton.onclick = function () {
//         const updatedData = {
//             employeenmae: row.cells[1].innerHTML,
//             dob: row.cells[2].innerHTML,
//             designation: row.cells[3].innerHTML,
//             salary: row.cells[4].innerHTML,
//             experience: row.cells[5].innerHTML,
//             employee_id: row.cells[0].innerHTML,
//             phone_number: row.cells[6].innerHTML,
//             address: row.cells[7].innerHTML,
//             email: row.cells[8].innerHTML
//         };

//   axios.put(`http://localhost:3000/update/${updatedData.employee_id}`, updatedData)
//     .then(response => {
//       console.log('Entry updated successfully:', response.data);
//           for (let i = 1; i < row.cells.length; i++) {
//          row.cells[i].contentEditable = false;
//                 }
//             })
//             .catch(error => {
//                 console.error('Error updating entry:', error);
//             });
//     };

//     row.appendChild(saveButton);
// }
