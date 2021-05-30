import { areaSobrevolar, posicionDron, accionDron } from './controlForestal.js';

function test1(){ //Se busca un output correcto a partir de datos de entrada correctos.
    areaSobrevolar('5', '5');
    var dron = posicionDron('3', '3', 'E');
    dron = accionDron(dron, 'L');
    var string = new String(dron.fila + " " + dron.columna + " " + dron.direccion);

    var aux = new RegExp("3 3 N");
    console.log(aux.test(string));
}

function test2(){ //Se busca un output correcto a partir de datos de entrada correctos.
    areaSobrevolar('5', '5');
    var dron = posicionDron('3', '3', 'E');
    dron = accionDron(dron, 'MMRMMRMRRM');
    var string = new String(dron.fila + " " + dron.columna + " " + dron.direccion);

    var aux = new RegExp("5 1 E");
    console.log(aux.test(string));
}

function test3(){ //Se busca un output correcto a partir de datos de entrada correctos.
    areaSobrevolar('5', '5');
    var dron = posicionDron('1', '2', 'N');
    dron = accionDron(dron, 'LMLMLMLMMLMLMLMLMM');
    var string = new String(dron.fila + " " + dron.columna + " " + dron.direccion);

    var aux = new RegExp("1 4 N");
    console.log(aux.test(string));
}

function test4(){ //Se testea qel program devuelva un error si los drones no estan dentro del area establecida.
    areaSobrevolar('5', '5');
    var mensaje = posicionDron('6', '1', 'N');
    var aux = new RegExp("error");
    console.log(aux.test(mensaje));

    areaSobrevolar('5', '5');
    var mensaje = posicionDron('1', '6', 'N');
    var aux = new RegExp("error");
    console.log(aux.test(mensaje));

    areaSobrevolar('5', '5');
    var mensaje = posicionDron('-1', '1', 'N');
    var aux = new RegExp("error");
    console.log(aux.test(mensaje));

    areaSobrevolar('5', '5');
    var mensaje = posicionDron('3', '-1', 'N');
    var aux = new RegExp("error");
    console.log(aux.test(mensaje));
}

function test5(){ //Se busca que los drones tengan una dirección que sea N, E, S o O.
    areaSobrevolar('5', '5');
    var mensaje = posicionDron('3', '-1', 'a');
    var aux = new RegExp("error");
    console.log(aux.test(mensaje));

    areaSobrevolar('5', '5');
    var mensaje = posicionDron('3', '-1', '1');
    var aux = new RegExp("error");
    console.log(aux.test(mensaje));

    areaSobrevolar('5', '5');
    var mensaje = posicionDron('3', '-1', '@');
    var aux = new RegExp("error");
    console.log(aux.test(mensaje));

    areaSobrevolar('5', '5');
    var mensaje = posicionDron('3', '-1', 'n');
    var aux = new RegExp("error");
    console.log(aux.test(mensaje));
}

test1();
test2();
test3();
test4();
test5();