/*************************
Define una función javascript que calcule la edad de los usuarios, y su sueldo. 
Debes considerar un json de ejemplo con los datos, en el que se registra para cada usuario su dni, 
año de nacimiento, fecha de ingreso en la empresa, plus de productividad en %, plus de antigüedad bruto 
(0,1% por cada tres años trabajado) y el sueldo base. (El json debe estar en el propio código, 
inicializando una variable, explica por qué se te exige este requisito).
*************************/

const YEAR = 2020;

function calculate (data) {
    let plusAntiguedad = (YEAR - data['ingreso']) / 3 * 0.1;
    let edad = new Date().getFullYear() - data['año'];
    let sueldo = data['sueldo'] * (1 + plusAntiguedad + data['plusProductividad']);
    
    console.log(`Este usuario tiene ${edad} años y cobra ${sueldo}€`);
    return [edad, sueldo];
}

// El JSON se tiene que inicializar en el código ¿para poder probarlo?
let juan = {"dni": "43382565B", "año": 1973, "ingreso": 2002, "plusProductividad": 0.5, "plusAntiguedad": 0.1, "sueldo": 1500 };
calculate(juan);