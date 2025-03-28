const empregado = {
  salarioBase: 5000,
  valorHoraExtra: 100,
  qtHorasExtras: 10,
  calculaSalario: function(){
    return this.salarioBase + (this.valorHoraExtra * this.qtHorasExtras);
  }
}

empregado.calculaSalario()

const empregado1 = {
  salarioBase: 10000,
  valorHoraExtra: 50,
  qtHorasExtras: 2,
  calculaSalario: function(){
    return this.salarioBase + (this.valorHoraExtra * this.qtHorasExtras);
  }
}

empregado1.calculaSalario()

empregado1.saudar = function(){
  console.log('olá')
}

empregado.saudar()