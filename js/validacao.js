function verificarSeChutePossuiValorValido(chute) {
  const numero = +chute;

  if (numeroENaN(numero)) {
    elementoChute.innerHTML += `
    <div>Valor invalido: Diga um numero</div> 
    `;
    return;
  }

  if (numeroEMaiorOuMenorQuePermitido(numero)) {
    elementoChute.innerHTML += `
      <div>Valor invalido: Diga um número entre ${menorValor} e ${maiorValor}</div>
      `;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
      <h2>Você acertou!!!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>
      <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
    `;
  } else if (numero < numeroSecreto) {
    elementoChute.innerHTML += `
    <div>o número secreto é maior <i class="fa-solid fa-arrow-turn-up"></i></div>
    `;
  } else {
    elementoChute.innerHTML += `
    <div>o número secreto é menor <i class="fa-solid fa-arrow-turn-down"></i></div>
    `;
  }
}

function numeroENaN(numero) {
  return Number.isNaN(numero);
}

function numeroEMaiorOuMenorQuePermitido(numero) {
  return numero < menorValor || numero > maiorValor;
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'jogar-novamente') {
    window.location.reload();
  }
});
