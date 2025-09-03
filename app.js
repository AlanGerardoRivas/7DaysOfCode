const numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let intento = "";
let acerto = false;
console.log(numero);

for(let contador = 0; contador < 3; contador++){
    intento = prompt("Intenta adivinar el número del 0 al 10:");    
    if(intento == numero){
        alert(`¡Felicidades, acertaste! El número era ${numero}.`);
        acerto = true;
        break;
    }
    alert("¡Incorrecto!");

}

if(!acerto){
    alert(`Desafortunadamente, no acertaste. ¡El número era ${numero}!`);
}

