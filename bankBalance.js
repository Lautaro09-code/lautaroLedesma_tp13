// Operaciones Bancarias

let operacionesBancarias = [2000, -1500, 300, 900, -200]


function calculateBalances(operacionesBancarias) {
    let despositosBancariosTotales = 0;
    let retirosBancariosTotales = 0;
    let saldoTotal = 0;
    for (let i = 0; i < operacionesBancarias.length; i++) {
        if (operacionesBancarias[i] < 0) {
            retirosBancariosTotales += operacionesBancarias[i]
        }else{
            despositosBancariosTotales += operacionesBancarias[i]
        }
        saldoTotal += operacionesBancarias[i]
    } 
    return [retirosBancariosTotales, despositosBancariosTotales, saldoTotal]
}

function bankBalance(nombreCliente, apellidoCliente, resumenDeCuenta){
    return `Estimad@ ${nombreCliente} ${apellidoCliente}:
El monto total de los depósitos es de: $${resumenDeCuenta[1]}.
El monto total de los retiros es de: $${resumenDeCuenta[0]}.
Por lo tanto, su saldo actual en la cuenta es de: $${resumenDeCuenta[2]}.`;
}

//let resumenDeCuenta = calculateBalances([2000, -1500, 300, 900, -200])
//console.log(bankBalance("Lautaro","Ledesma",resumenDeCuenta))

//let resumenDeCuenta = calculateBalances([800, -10500, 30000, -9000, 9200])
//console.log(bankBalance("Gabriel","Ledesma",resumenDeCuenta))
module.exports = bankBalance