// Tablas

function createMultiplicationTable() {
    for (let e = 1; e <= 10; e++) {
        console.log("--------------")
        console.log("Tabla del:", e )
        for (let i = 1; i <= 10; i++) {
        console.log(e, "x", i, "=",e * i )
        }
        console.log("--------------")
    }
}
createMultiplicationTable()