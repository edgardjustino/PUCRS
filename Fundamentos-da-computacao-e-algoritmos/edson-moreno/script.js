function avaliaParidade(limiteSuperior) {
  for (let i = 0; i < limiteSuperior; i++) {
    if (i % 2 == 1) {
      console.log(i + ' é um número ímpar');
    } else console.log(i + ' é um número par');
  }
} //n vai retornar nada

avaliaParidade(10);

//parte 2
