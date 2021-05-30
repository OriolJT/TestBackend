import { areaSobrevolar, posicionDron, accionDron } from './controlForestal.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Introduce area a sobrevolar: ", function(area){
    areaSobrevolar(area[0], area[2]);
    var main = function () {
        rl.question("Introduce posicion del dron: ", function(posicion){
            var dron = posicionDron(posicion[0], posicion[2], posicion[4]);
            rl.question("Introduce las acciones del dron: ", function(acciones){
                dron = accionDron(dron, acciones);
                console.log(dron.fila + " " + dron.columna + " " + dron.direccion);
                main();
            });
        });
    }
    main();
});

