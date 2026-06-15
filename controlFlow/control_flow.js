let userRole = "manager";
let accessLevel;

let isLoggedIn = true;
let userMessage;

// If else anidado

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

// If else

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

// Switch

let userType = "manager";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

// Operador Ternario
let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Tarea practica
let employeeType = "member-subscriber";
let serviceAccess;

switch (employeeType) {
    case "employee":
        serviceAccess = "Está autorizado a tener acceso a los Servicios Dietéticos.";
        break;
    case "member-subscriber":
        serviceAccess = "Está autorizado a tener acceso a los Servicios Dietéticos y a interacción uno a uno con un dietista.";
        break;
    case "subscriber":
        serviceAccess = "Está autorizado a tener acceso parcial para facilitar los Servicios Dietéticos únicamente.";
        break;
    case "no-subscriber":
        serviceAccess = "Necesita inscribirse o al menos suscribirse primero para poder acceder a esta instalación.";
        break;
    default:
        serviceAccess = "No contratado";
}

console.log("Tipo de empleado: " + employeeType + " Acceso a: " + serviceAccess);