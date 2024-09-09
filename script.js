const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        playNote(note);
    });
});
function playNote(note) {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const frequencies = {
        'C4': 261.63,
        'D4': 293.66,
        'E4': 329.63,
        'F4': 349.23,
        'G4': 392.00,
        'A4': 440.00,
        'B4': 493.88
    };
    oscillator.type = 'sine';
    oscillator.frequency.value = frequencies[note];
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, 1000);
}