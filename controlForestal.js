var area = []; // [filas, columnas]

class Dron{
    constructor(fila,columna,direccion){
        this.fila = fila;
        this.columna = columna;
        this.direccion = direccion;
    }
}

const DIRECCION_L = {
    'N' : 'O',
    'O' : 'S',
    'S' : 'E',
    'E' : 'N'
}

const DIRECCION_R = {
    'N' : 'E',
    'O' : 'N',
    'S' : 'O',
    'E' : 'S'
}

function areaSobrevolar(filas, columnas){
    if (filas != columnas){
        console.log("las filas y las columnas deben ser iguales");
        return 'error';
    }
    else{
        this.area[0] = filas;
        this.area[1] = columnas;
    }
}

function posicionDron(fila,columna,direccion){
    if(direccion == 'N'  || direccion == 'E' || direccion == 'S' || direccion == 'O'){
        if(fila >= 0 && fila <= area[0] && columna >= 0 && columna <= area[1]){
            let dron = new Dron(fila,columna,direccion);
            return dron;
        }
        else{
            console.log('Se quiere crear un dron en una posición fuera del area establecida.')
            return 'error';
        }
    }
    else{
        console.log("La direccion debe ser N,E,S o O.");
        return 'error';
    }
}

function accionDron(dron, acciones){ // Devuelve posición final del dron.
    for (var i = 0; i < acciones.length; i++){
        var aux = acciones[i];
        switch (aux){
            case 'L': dron.direccion = DIRECCION_L[dron.direccion];
                break;
            case 'R': dron.direccion = DIRECCION_R[dron.direccion];
                break;
            case 'M': this.move(dron);
                break;
            default: console.log("accion " + aux + " no es valida.");
                break;
        }
    }

    function move(dron){
        switch(dron.direccion){
            case 'N': if(dron.columna < area[1]){
                        dron.columna++; 
                    }
                    else {
                        console.log("El dron no puede salir de su area establecida.")
                    }
                break;
            case 'E': if(dron.fila < area[0]){
                        dron.columna++; 
                    }
                    else {
                        console.log("El dron no puede salir de su area establecida.")
                    }
                break;
            case 'S': if(dron.columna > area[1]){
                        dron.columna--; 
                   }  
                    else {
                        console.log("El dron no puede salir de su area establecida.")
                    }
                break;
            case 'O': if(dron.columna > area[0]){
                         dron.columna--; 
                     }
                    else {
                        console.log("El dron no puede salir de su area establecida.")
                    }
                break;
        }
    }
}