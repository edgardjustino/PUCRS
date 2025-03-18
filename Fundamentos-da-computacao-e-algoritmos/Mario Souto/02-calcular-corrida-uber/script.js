function formataMoeda(algumValor) {
  return algumValor.toFixed(2).replace('.', ',');
}

function calculaCorrida() {
  let campoDistanciaEmKM = document.getElementById('campoDistanciaEmKM');
  let campoTempoEmMin = document.getElementById('campoTempoEmMin');
  //PROCESSAMENTO
  //valida na entrada/Fail Fast Validations
  let isCampoDistanciaVazio = campoDistanciaEmKM.value == '';
  if (isCampoDistanciaVazio) {
    alert('Não temos o valor da distância');
    return;
  } 

  //Organizar as entradas e aplicar a regra de negócio
  let tarifaDinamica = 1.4;
  let distanciaEmKM = campoDistanciaEmKM.value * tarifaDinamica;
  let tempoEmMin = campoTempoEmMin.value * 0.26;
  let valorDaCorrida = 2 + distanciaEmKM + tempoEmMin;

  //output
  alert('O valor da corrida é: ' + formataMoeda(valorDaCorrida));
}
