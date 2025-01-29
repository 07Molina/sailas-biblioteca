const suma = document.getElementById('suma');


suma.addEventListener("click", (event) => {

event.preventDefault();


let numero1 = parseInt(document.getElementById('numero1').value);
let numero2 = parseInt(document.getElementById('numero2').value);



console.log('estoy escuchando el bootn')



let resultado = numero1 + numero2


document.getElementById('resultado').innerText = `el resultado de la suma es: ${resultado}`;

});  

