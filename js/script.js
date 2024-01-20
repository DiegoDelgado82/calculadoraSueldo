const calcularSueldo = ()=>{
let basico= document.getElementById("sueldoBasico").value 
let domingo= document.getElementById("horasDomingo").value *0.00499* basico
let feriado= document.getElementById("horasFeriado").value *0.01*basico
let nocturnas= document.getElementById("horasNocturnas").value *0.000649*basico
let sueldo= (parseInt(domingo)+parseInt(feriado)+parseInt(basico)+parseInt(nocturnas))*0.83
let bruto= parseInt(domingo)+parseInt(feriado)+parseInt(basico)+parseInt(nocturnas)
document.getElementById("sueldo").innerText=`$${parseInt(sueldo)}`
document.getElementById("bruto").innerText=`$${parseInt(bruto)}`
}

parseFloat()