// Get all the keys
const keys = document.querySelectorAll('.key');

// Add event listener to each key
keys.forEach(key => {
    key.addEventListener('click', () => {
        // Get the note of the key
        const note = key.getAttribute('data-note');

        // Play the note
        playNote(note);
    });
});

// Function to play a note
function playNote(note) {
    // Create a new audio context
    const audioContext = new AudioContext();

    // Create an oscillator
    const oscillator = audioContext.createOscillator();

    // Set the frequency of the oscillator based on the note
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

    // Connect the oscillator to the destination
    oscillator.connect(audioContext.destination);

    // Start the oscillator
    oscillator.start();

    // Stop the oscillator after 1 second
    setTimeout(() => {
        oscillator.stop();
    }, 1000);
}