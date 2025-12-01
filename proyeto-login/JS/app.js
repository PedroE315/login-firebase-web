//manejo de login
// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDnQuboBX8axmnTHaWZ2zGqp7xezAQp-qc",
  authDomain: "login-web-itza.firebaseapp.com",
  projectId: "login-web-itza",
  storageBucket: "login-web-itza.firebasestorage.app",
  messagingSenderId: "476994701836",
  appId: "1:476994701836:web:667a43e78b185a5ab2bc29"
};

// Inicializar Firebase (VERSIÓN 8)
firebase.initializeApp(firebaseConfig);

// Servicio de autenticación
const auth = firebase.auth();

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "home.html"; // Ir a la página protegida
    })
    .catch(err => {
      document.getElementById("mensaje").innerText = "Error: " + err.message;
    });
});
