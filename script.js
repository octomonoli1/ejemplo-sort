
var array = []; //Variable global (visible desde todos)

window.onload = () => {
    inicializar_array();
    pintarArray("array_sin_orden", array);
}

function inicializar_array(){
    let randomIndx = aleatorioRango(5,10);

    for(let i = 0; i<randomIndx; i++){
        array.push(this.aleatorioRango(1,100));
    }
}

function pintarArray(idTable, array){

    let tabla = document.getElementById(idTable);
    let tr = tabla.getElementsByTagName("tr")[0];
    tr.innerHTML = '';

    array.forEach(num => {
        let td = document.createElement("td");
        td.textContent = num;
        tr.appendChild(td);
    });
}

function aleatorioRango(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ordenarArray_classic(){

    let array_ordenado = [...array];
    let inicio = performance.now();

    for(let i = 0; i < array_ordenado.length; i ++){
        for(let j = 0 ; j < array_ordenado.length; j++){
            if(array_ordenado[i] < array_ordenado[j]){
                let aux = array_ordenado[i];
                array_ordenado[i] = array_ordenado[j];
                array_ordenado[j] = aux;
            }
        }
    }

    pintarArray("array_ordenado", array_ordenado);
    console.log("Algoritmo clásico ejecutado en " + (performance.now() - inicio) + "ms. ");

    return array_ordenado;
}

function ordenarArray_bubbleSort(){

    let array_ordenado = [...array];
    let inicio = performance.now();

    for(let i = 0; i < array_ordenado.length; i ++){
        for(let j = 0 ; j < array_ordenado.length; j++){
            if(array_ordenado[i] < array_ordenado[j]){
                let aux = array_ordenado[i];
                array_ordenado[i] = array_ordenado[j];
                array_ordenado[j] = aux;
            }
        }
    }

    pintarArray("array_ordenado", array_ordenado);
    console.log("Algoritmo burbuja ejecutado en " + (performance.now() - inicio) + "ms. ");

    return array_ordenado;
}