// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// crear una lista 
let amigos = [];
const nombreAmigos = document.getElementById("amigo");


function agregarAmigo(){
  const nombreFinal = nombreAmigos.value.trim();
  console.log(nombreFinal);

//si la caja del input esta vacia, mostrar alerta, sino, generar push y limpieza de la lista.
  if(nombreFinal === "") {
    let mensaje = alert("Por favor, inserte un nombre.")
  } else {
    amigos.push(nombreFinal);
    limpiarCaja();
    actualizarLista();
  }
  return;
}

function limpiarCaja() {
  nombreAmigos.value = '';
  return;
}


function actualizarLista() {
  let mostrarLista = document.getElementById('listaAmigos');
  mostrarLista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    mostrarLista.appendChild(li);
  }
}

//genera una funcion para hacer un sorteo, se elegira de forma automatica un nombre de la lista, que no se repita al apretar el boton
function sortearAmigo() {
  let actContenido = document.getElementById('resultado');
  actContenido.innerHTML= '';

  if (amigos.length === 0) {
    actContenido.innerHTML= '¡Ingrese un nombre para poder jugar!';
  }else {
    let sorteo = Math.floor(Math.random()*amigos.length);
    let seleccionNombre = amigos[sorteo]; 

    actContenido.innerHTML = `El amigo secreto sorteado es: ${seleccionNombre}`;
  }

}











//el boton debe registrar y guardar los nombres
//el boton aleatorio debe recoger un nombre de la lista para ser el amigo secreto
