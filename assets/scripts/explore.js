// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const smileIcon = document.querySelector('#explore img');
  const playButton = document.querySelector('button');
  const textToSpeak = document.getElementById('text-to-speak');
  const synth = window.speechSynthesis;

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option disabled selected>Select Voice:</option>';
    for(const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`
      if (voice.default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  playButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    const selectedVoice = voices.find(voice => voice.name === selectedOption);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.onstart = () => {
        smileIcon.src = 'assets/images/smiling-open.png';
      };
      utterance.onend = () => {
        smileIcon.src = 'assets/images/smiling.png';
      };
      synth.cancel();
      synth.speak(utterance);
    }
  });
}