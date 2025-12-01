//verificaicon de usuario
// Verificar si el usuario está autenticado
auth.onAuthStateChanged(user => {
  if (!user) {
    // Si no está logeado, regresar al login
    window.location.href = "index.html";
  }
});

// Cerrar sesión
document.getElementById("cerrar").addEventListener("click", () => {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
});
