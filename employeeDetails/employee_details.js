const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Java' },
    { id: 2, name: 'Jane Doe', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'JavaScript' },
    //... Se pueden agregar más registros de empleados aquí
    { id: 4, name: 'Jane Williams', age: 32, department: 'Marketing', salary: 55000, specialization: 'TypeScript' },
    { id: 5, name: 'Michael Brown', age: 40, department: 'Sales', salary: 70000, specialization: 'Java' },
    { id: 6, name: 'Emily Davis', age: 27, department: 'IT', salary: 48000, specialization: 'Python' },
    { id: 7, name: 'David Wilson', age: 29, department: 'HR', salary: 46000, specialization: 'JavaSript' },
    { id: 8, name: 'Mac Miller', age: 31, department: 'Finance', salary: 62000, specialization: 'Python' },
];

// Función para mostrar todos los empleados
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado con este ID';
    }
}

function displayBySpecialization(specialization) {
    const filteredEmployees = employees.filter(employee => employee.specialization === specialization);
    const employeesDisplay = filteredEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = employeesDisplay;
}