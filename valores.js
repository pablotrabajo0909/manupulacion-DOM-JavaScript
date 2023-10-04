const h1 =document.querySelector('h1');
const input1 =document.querySelector('#calculo1');
const input2 =document.querySelector('#calculo2');
const btn =document.querySelector('#btnCalcular');
const p =document.querySelector('#pReult');
const form =document.querySelector('#form')

form.addEventListener('submit', btnOnClick);

//btn.addEventListener('click',btnOnClick);

function btnOnClick(event) {
    console.log({event});
    event.preventDefault();//accedemos asu propiedad de event para evitar recargar la pagina
    const sumaInputs=(parseInt(input1.value) + parseInt(input2.value));
    p.innerHTML='Resultado de la suma es' + ' ' +sumaInputs;
}
