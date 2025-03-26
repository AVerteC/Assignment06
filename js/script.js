const $ = (id) => { return document.getElementById(id); };

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
// form = document.getElementById('addForm');
form = $('addForm');

employeeTable = $('employees');
// employeeTable = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
// let count = table.rows.length;
let count = 0;
$('empCount').innerText = count;
// function addCell(value) {

// }


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value;
    let name = $('name').value;
    let extension = $('extension').value;
    let department = $('department').value;
    let email = $('email').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employeeTable.insertRow();
    
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExtension = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellEmail = row.insertCell();
   

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellDepartment.appendChild(document.createTextNode(department));
    cellEmail.appendChild(document.createTextNode(email));
   

    // CREATE THE DELETE BUTTON
    let cellDelete = row.insertCell();
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    cellDelete.appendChild(deleteButton);

    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();
    
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    $('empCount').innerText = count;
    
})

// DELETE EMPLOYEE
employeeTable.addEventListener('click', function(e) {
    if (e.target.tagName === "BUTTON") {
        if (confirm("Are you sure you want to delete this employee?")) {   
            // alternate method
            // let row = e.target.closest('tr');
            // if (row) {
            //     row.remove();
            // }
            let row = e.target.parentNode.parentNode;
            let index = row.rowIndex;
            employeeTable.deleteRow(index);
        count--;
        $('empCount').innerText = count;

        }
    }
} )
