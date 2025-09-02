let preguntaNombre = prompt('¿Cuál es tu nombre?');
let preguntaEdad = prompt('¿Cuántos años tienes?');
let preguntaLenguaje = prompt('¿Qué lenguaje de programación estás estudiando?'); 

alert(`Hola ${preguntaNombre}, tienes ${preguntaEdad} años y ya estás aprendiendo ${preguntaLenguaje}!`);

let preguntaOpcional = prompt (`¿Te gusta estudiar ${preguntaLenguaje}? Responde con el número 1 para Sí o 2 para No`);



if (preguntaOpcional == 1) {
  alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (preguntaOpcional == 2) {
  alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
  alert("Ingresa una opción válida");
}

const ciudad = prompt("Escribe tu ciudad:");
const msg = `¡Eres de ${ciudad}!.`;
alert(msg);