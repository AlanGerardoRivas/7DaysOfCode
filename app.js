const area = prompt("¿Quisieras seguir hacia el área de Front-End o seguir hacia el área de Back-End?.");
let lenguaje = "";


if (area === "Front-End") {
  lenguaje = prompt("¿Quieres aprender React o Vue?");
} else if (area === "Back-End") {
   lenguaje = prompt("¿Quieres aprender C# o Java?")
} else {
    alert("¡No ingresaste un área válida!");
}

const especialidad = prompt("Escribe 1 para seguir especializándote en el área elegida o 2 para desarrollarte para convertirte en Fullstack");
if (especialidad == 1) {
    alert(`¡Sigue especializándote en ${lenguaje} para dominar el área de ${area}!`);
} else if (especialidad == 2){
    alert(`¡Es hora de comenzar a aprender otros lenguajes además de ${lenguaje} si quieres convertirte en Fullstack!`);
} else {
    alert("¡No ingresaste un valor válido!.")
}

let mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
while (mensaje === "ok"){
    let nuevaTecnologia = prompt("¿Cuál?");
    alert(`¡${nuevaTecnologia} es realmente una tecnología muy interesante!`);
    mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
}