//Calculadora del crecimiento de una inversión de acuerdo al interés anual y la cantidad de meses de ahorro

function calcularCrecimiento(inversionInicial, tasaDeInteres, meses) {
    tasaDeInteres /= 100;
    meses /= 12;
    return inversionInicial * (numeroDeEuler ** (tasaDeInteres * meses));
}

const numeroDeEuler = 2.71828;
let inversionInicial = 0;
let tasaDeInteres = 0;
let meses = 0;
let resultado = 0;
let repetirConsulta = false;

do {

    inversionInicial = Number(prompt("Ingrese el monto inicial de inversión"));
    while (isNaN(inversionInicial) || inversionInicial <= 0) {
        alert("Ingrese un monto válido");
        inversionInicial = Number(prompt("Ingrese el monto inicial de inversión"));
    }

    tasaDeInteres = Number(prompt("Ingrese la tasa de interés anual en porcentajes"));
    while (isNaN(tasaDeInteres) || tasaDeInteres <= 0) {
        alert("Ingrese una tasa válida");
        tasaDeInteres = Number(prompt("Ingrese la tasa de interés anual en porcentajes"));
    }

    meses = Number(prompt("Ingrese la cantidad de meses que va a ahorrar"));
    while (isNaN(meses) || meses <= 0) {
        alert("Ingrese una cantidad válida");
        meses = Number(prompt("Ingrese la cantidad de meses que va a ahorrar"));
    }

    resultado = calcularCrecimiento(inversionInicial, tasaDeInteres, meses).toFixed(2);
    alert(`Su inversión crecerá hasta ${resultado}$ en ${meses} meses`);

    repetirConsulta = confirm("Desea realizar otra consulta?");

} while (repetirConsulta);


