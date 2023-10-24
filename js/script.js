const calcularSueldo = ()=>{
let basico= document.getElementById("sueldoBasico").value 
let domingo= document.getElementById("horasDomingo").value *0.00499* basico
let feriado= document.getElementById("horasFeriado").value *0.01*basico
let nocturnas= document.getElementById("horasNocturnas").value *0.000649*basico
let comisiones= document.getElementById("comisiones").value*1
let sueldo= (parseInt(domingo)+parseInt(feriado)+parseInt(basico)+parseInt(nocturnas)+parseInt(comisiones))*0.83
document.getElementById("sueldo").innerText=`$${parseInt(sueldo)}`

}

parseFloat()