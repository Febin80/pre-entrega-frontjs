const logo=document.getElementById("log");
const inicio1=document.getElementById("inicio");
const form = document.getElementById('contactForm');
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

localStorage.clear();

let nos=document.getElementById("acercaNos")

let nombreInfo="Acerca de nosotros";

let nomInfo=localStorage.setItem("acerNos",nombreInfo);

let nom1=localStorage.getItem("acerNos");

nos.textContent = nom1;


let comidasAPI=document.getElementById("comidasAPI");
console.log(comidasAPI);

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")

.then((respuesta)=>respuesta.json())

.then(datos => {

      datos.meals.forEach((elemento) => {

          const contenedorCreado = document.createElement("div"); 
          contenedorCreado.innerHTML = `
          <h3>${elemento.strMeal}</h3>
          <img src="${elemento.strMealThumb}">
          `
          ; 
          comidasAPI.append(contenedorCreado);
      });
  
})

fetch("comidas.json")

.then((respuesta)=>respuesta.json())

.then(datos => {

      datos.forEach((elemento) => {

          const contenedorCreado = document.createElement("div"); 
          contenedorCreado.innerHTML = `
          <h3>${elemento.nombre}</h3>
          `
          ; 
          comidasJson.append(contenedorCreado);
})
})

const comidaId = document.getElementById("comidaId");

let comidas=["arroz", "pure" , "chocolate" ]  ;

comidas.forEach((elemento) => {

      const contenedorCreado = document.createElement("div"); 
      contenedorCreado.innerHTML = `
      <h3>${elemento}</h3>
      `
      ; 
      comidaId.append(contenedorCreado);
})