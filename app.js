async function login() {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("password").value;

  const response = await fetch("https://script.google.com/macros/s/AKfycbyKvaxROe_OvMICF2d2AJB-O_pFrucJIBnbYgHmcC3b9xYCHHy-PjHTjCr82cFZQboEAQ/exec", {
    method: "POST",
    body: JSON.stringify({
      usuario: user,
      password: pass
    })
  });

  const data = await response.json();

  if (!data.success) {
    alert("Usuario o contraseña incorrectos");
    return;
  }

  document.getElementById("login").style.display = "none";
  document.getElementById("credencial").style.display = "block";

  document.getElementById("foto").src = data.foto;
  document.getElementById("nombre").innerText = data.nombre;

  const estado = document.getElementById("estado");

  if (data.estado === "VALIDA") {
    estado.innerText = "CREDENCIAL VÁLIDA";
    estado.style.background = "#f5c400";
    estado.style.color = "#000";
  } else {
    estado.innerText = "CREDENCIAL CANCELADA";
    estado.style.background = "#6b3f1d";
    estado.style.color = "#fff";
  }
}
