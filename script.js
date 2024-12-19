const logo=document.getElementById("log");
const inicio1=document.getElementById("inicio");
const form = document.getElementById('contactForm');
const boton = document.getElementById("enviar");
const newForm1=document.getElementById("Newsletter-form"); 

logo.addEventListener("click", function () {
  document.getElementById("log").textContent = "El mejor Parrilladas";
}
);

inicio1.addEventListener("click", function () { 
  alert("Aca es inicio");
});

form.addEventListener("submit", function (event) {
    let nombre= document.getElementById('nombre').value;
    let mail= document.getElementById('mail').value;
    let mensaje= document.getElementById('mensaje').value;

    if (nombre !== "" && mail !== "" && mensaje !== "") {
        alert("Informacion enviado con éxito ");
      }
});

newForm1.addEventListener("submit", function (event) {
  let mail = document.getElementById("mail").value;
  if (mail !== ""){ {
    alert("Gracias por suscribirte");
  } 
  }
});

