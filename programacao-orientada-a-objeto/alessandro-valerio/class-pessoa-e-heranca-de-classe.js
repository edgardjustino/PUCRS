class Pessoa {
  constructor(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
  }
  ola() {
    console.log('olá, eu sou ' + this.nome);
  }

  calculaIdade() {
    return new Date().getFullYear() - this.anoDeNascimento;
  }
}

const pessoa1 = new Pessoa('Joao', 1992, 'estudante');
//conjunto de regras qd é classe, tem q ter um construtor. Criar a pessoa de várias formas? Via contrutor não vai dar
//construtor responsável por fazer o obj
//toda vez q vou criar um obj do tipo pessoa, eu vou usar a classe.

//herança de classe EXTENDS

class Estudante extends Pessoa {
  constructor(nome, anoDeNascimento, profissao, matricula) {
    super(nome, anoDeNascimento, 'Estudante'); //mudando a profissão pra estudante pq nao faz sentido perguntar profissao sabendo que é estudante.

    this.matricula = matricula;
  }
}

const aluno = new Estudante(["Fulano', 'de Tal"], 1990, 'Estudante', 120901);

console.log(aluno);
