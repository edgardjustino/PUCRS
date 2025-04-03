function Estagiario(numeroContrato) {
  let numeroContrato = numeroContrato;
}

const estagiario1 = new Estagiario(10);

class Estudante extends Pessoa {
  #matricula;
  constructor(nome, anoDeNascimento, matricula) {
    super(nome, anoDeNascimento, 'Estudante');
    this.#matricula = matricula;
  }

  ola() {
    super.ola();
    console.log('colegas'); 
  }
}
