const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = sortearNumero();

function sortearNumero() {
  const range = maiorValor - menorValor + 1;
  return parseInt(Math.random() * range + menorValor);
}

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;
