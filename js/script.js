const calcularSueldo = ()=>{
let basico= document.getElementById("sueldoBasico").value 
let domingo= document.getElementById("horasDomingo").value *0.00499* basico
let feriado= document.getElementById("horasFeriado").value *0.01*basico
let sueldo= (parseInt(domingo)+parseInt(feriado)+parseInt(basico))*0.83
document.getElementById("sueldo").innerText=`$${parseInt(sueldo)}`
}