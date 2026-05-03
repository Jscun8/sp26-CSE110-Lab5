// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const dropdownSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audioIcon = document.querySelector('#volume-controls img');
  const audioSource = document.querySelector('audio');
  const volumeControl = document.getElementById('volume');
  const playButton = document.querySelector('button');
  dropdownSelect.addEventListener('change', () => {
    const selectedOption = dropdownSelect.value;
    if (selectedOption === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      audioSource.src = 'assets/audio/air-horn.mp3';
    } else if (selectedOption === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      audioSource.src = 'assets/audio/car-horn.mp3';
    } else if (selectedOption === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      audioSource.src = 'assets/audio/party-horn.mp3';
    } else {
      hornImage.src = 'assets/images/no-image.png';
      audioSource.src = '';
    }
  });

  volumeControl.addEventListener('input', () => {
    const volume = volumeControl.value;
    if (volume == 0) {
      audioIcon.src = 'assets/icons/volume-level-0.svg';
      audioSource.volume = 0;
    } else if (volume < 33) {
      audioIcon.src = 'assets/icons/volume-level-1.svg';
      audioSource.volume = volume / 100;
    } else if (volume < 67) {
      audioIcon.src = 'assets/icons/volume-level-2.svg';
      audioSource.volume = volume / 100;
    } else {
      audioIcon.src = 'assets/icons/volume-level-3.svg';
      audioSource.volume = volume / 100;
    }
  });

    playButton.addEventListener('click', () => {
      audioSource.play();
      if(dropdownSelect.value === 'party-horn') {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
      }
  });
}