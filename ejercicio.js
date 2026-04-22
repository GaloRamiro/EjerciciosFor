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
  switch (valor_ejecucion) {
    case 1:
      ListaNumerosPares();
      break;
    case 2:
      ListarNumerosReveras();
      break;
    case 3:
      ListaNumerosPares();
      break;
    case 4:
      ListarNumerosImpares();
  }
}
