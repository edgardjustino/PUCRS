// function Pessoa() {
//   this.nome = "João";
//   this.anoDeNascimento = 1990;
//   this.profissao = "Estudante";
//   this.calculaIdade = function(){
//     return new Date().getFullYear() - this.anoDeNascimento;
//   }
// }

// const pessoa1 = new Pessoa()
// console.log(pessoa1.calculaIdade())
// pessoa1.anoDeNascimento = 1983;
// console.log(pessoa1.calculaIdade())

//não to colocando nome: "fulano de tal"pq n to criando obj, to usando os atributos como se ja existissem. 
//this mexendo com o próprio obj, código recebe coisas minhas. 
// new Date cada vez q eu crio uma data usando o new ele vai pegar a data atual. 

//agora com parametro
function Pessoa(nome, anoDeNascimento, profissao) {
  this.nome = nome;
  this.anoDeNascimento = anoDeNascimento;
  this.profissao = profissao;
  this.calculaIdade = function(){
    return new Date().getFullYear() - this.anoDeNascimento;
  }
}

const pessoa2 = new Pessoa("Edgard", 1989,'Web Developer')
console.log("pessoa 2 tem " + pessoa2.calculaIdade() + " anos")

const pessoa3 = new Pessoa("Maria", 2016, "estudante")
