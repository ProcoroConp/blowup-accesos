// **https://script.google.com/macros/s/AKfycbya6Y5e9R6abA__NBWuuKRFVxJWRuww1nify5-HgK2ZgFDAgCU52CDjtUzSLQuDcq0f9Q/exec**
const URL = "https://script.google.com/macros/s/AKfycbya6Y5e9R6abA__NBWuuKRFVxJWRuww1nify5-HgK2ZgFDAgCU52CDjtUzSLQuDcq0f9Q/exec";

function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  document.getElementById("error").innerText = "";

  fetch(`${URL}?usuario=${encodeURIComponent(usuario)}&password=${encodeURIComponent(password)}`)
    .then(response => response.json())
    .then(data => {
      if (!data.success) {
        document.getElementById("error").innerText = "Usuario o contraseña incorrectos / credencial cancelada";
        return;
      }

      // Hide login and show credential
      document.getElementById("login").style.display = "none";
      document.getElementById("credencial").style.display = "block";

      // Set info
      document.getElementById("foto").src = data.foto;
      document.getElementById("nombre").innerText = data.nombre;

      const estadoEl = document.getElementById("estado");
      estadoEl.innerText = data.estatus;

      if (data.estatus === "VALIDA") {
        estadoEl.style.background = "#F4C430";  // amarillo
        estadoEl.style.color = "#000";
      } else {
        estadoEl.style.background = "#6F4E37";  // café
        estadoEl.style.color = "#fff";
      }
    })
    .catch(err => {
      document.getElementById("error").innerText = "Error de conexión al servidor";
      console.error(err);
    });
  function regresar() {
  document.getElementById("credencial").style.display = "none";
  document.getElementById("login").style.display = "block";

  document.getElementById("usuario").value = "";
  document.getElementById("password").value = "";
  document.getElementById("error").innerText = "";
}

}
