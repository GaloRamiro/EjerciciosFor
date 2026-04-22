//Imprime numero de 0 al 2
function ListarNumeros() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
}
//Imprime numeros de 3 al 0
function ListarNumerosReveras() {
  for (let i = 3; i > 0; i--) {
    console.log(i);
  }
}
//Imprime numeros pares de 0 al 10
function ListaNumerosPares() {
  for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
}
//Imprime numeros impares de 1 al 11
function ListarNumerosImpares() {
  for (let i = 1; i <= 7; i += 2) {
    console.log(i);
  }
}
//ejecuta las otras funciones pide un valor y el if valida y llama a la funcion correspondiente
function ejecutar(valor_ejecucion) {
  if (valor_ejecucion == 1) {
    ListarNumeros();
  } else if (valor_ejecucion == 2) {
    ListarNumerosReveras();
  } else if (valor_ejecucion == 3) {
    ListaNumerosPares();
  } else if (valor_ejecucion == 4) {
    ListarNumerosImpares();
  }
}
