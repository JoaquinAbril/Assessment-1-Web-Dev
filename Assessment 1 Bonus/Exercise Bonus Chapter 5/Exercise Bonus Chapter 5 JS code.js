document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class "button" and store them in the "buttons" variable
    const buttons = document.querySelectorAll('.button');

    // Iterate over each button element
    buttons.forEach(button => {
        // Add a click event listener to each button
        button.addEventListener('click', function () {
            // Get the value of the "data-sound" attribute of the clicked button, which holds the path to the sound file
            const soundFile = this.getAttribute('data-sound');
            // Call the playSound function with the path to the sound file as an argument
            playSound(soundFile);
        });
    });

    // Function to play the sound
    function playSound(sound) {
        // Get the audio element by its ID
        const audio = document.getElementById('audio');
        // Set the source of the audio element to the provided sound file path
        audio.src = sound;
        // Start playing the audio
        audio.play();
    }
});
