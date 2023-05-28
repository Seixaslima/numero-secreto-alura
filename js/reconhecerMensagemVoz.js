const elementoChute = document.getElementById('chute');
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
  const chute = e.results[0][0].transcript.slice(0, -1);

  mostraChuteNaTela(chute);
  verificarSeChutePossuiValorValido(chute);
}

function mostraChuteNaTela(chute) {
  console.log(chute);
  elementoChute.innerHTML = `
  <div>Você disse:</div>
  <span class="box">${chute}</span>
  `;
}

recognition.addEventListener('end', () => recognition.start());
