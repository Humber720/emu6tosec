function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "ojo.png"; // Cambia a la imagen de ojo cerrado
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "ojo2.png"; // Cambia de nuevo a la imagen de ojo abierto
    }
}




// Lista de usuarios y contraseñas
const students = {
    "Danny": "9865255",
    "DevidAlbert": "12510638",
    "RosaJulieta": "14879298",
    "LuisJosue": "16198737",
    "JessicaAbigail": "13986076",
    "William": "9927208",
    "JoseVictor": "13276007",
    "AdrianaElia": "14912561",
    "KevinJoel": "13280247",
    "KatherineCarla": "10083518",
    "DavisManuel": "13279650",
    "Nadia": "13086870",
    "IgnacioGustavo": "13281247",
    "FernandoAndre": "13121085",
    "LuzClara": "303030",
    "AlinaRubi": "404040"
};

// Función de inicio de sesión
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (students[username] === password) {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("studentContent").style.display = "block";
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}

// Función para descargar las notas
function downloadGrades() {
    const username = document.getElementById("username").value;
    const notesFilePath = `notas/${username}.jpg`; // Ruta de la imagen del estudiante

    // Verificar si la imagen existe
    const link = document.createElement('a');
    link.href = notesFilePath;
    link.download = `${username}_notas.jpg`; // Nombre del archivo que se descargará
    link.click(); // Simular clic para iniciar la descarga
}

// Función para cerrar sesión
function logout() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("studentContent").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
