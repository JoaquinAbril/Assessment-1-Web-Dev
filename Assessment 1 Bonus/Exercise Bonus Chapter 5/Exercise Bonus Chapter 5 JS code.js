// Define your audio samples and their durations here
const audioSamples = [
    { name: "Sample 1", file: "sample1.mp3", duration: 10 },
    { name: "Sample 2", file: "sample2.mp3", duration: 15 },
    // Add more audio samples as needed
];

const samplesPerPage = 9;
let currentPage = 1;

const audioSamplesDiv = document.querySelector('.audio-samples');

// Function to dynamically create audio sample elements
function createAudioSampleElement(sample) {
    const audioElement = document.createElement('audio');
    audioElement.src = `path_to_audio_files/${sample.file}`;

    const sampleElement = document.createElement('div');
    sampleElement.classList.add('audio-sample');
    sampleElement.innerHTML = `
        <p class="sample-name">${sample.name}</p>
        <p class="sample-duration">${sample.duration} seconds</p>
    `;
    sampleElement.appendChild(audioElement);

    sampleElement.addEventListener('click', () => {
        audioElement.play();
    });

    return sampleElement;
}

// Function to display audio samples for the current page
function displayAudioSamples() {
    audioSamplesDiv.innerHTML = '';
    const startIndex = (currentPage - 1) * samplesPerPage;
    const endIndex = Math.min(startIndex + samplesPerPage, audioSamples.length);

    for (let i = startIndex; i < endIndex; i++) {
        const sampleElement = createAudioSampleElement(audioSamples[i]);
        audioSamplesDiv.appendChild(sampleElement);
    }
}

// Function to handle pagination
function handlePagination() {
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayAudioSamples();
            nextPageButton.removeAttribute('disabled');
            if (currentPage === 1) {
                prevPageButton.setAttribute('disabled', 'true');
            }
        }
    });

    nextPageButton.addEventListener('click', () => {
        const totalPages = Math.ceil(audioSamples.length / samplesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayAudioSamples();
            prevPageButton.removeAttribute('disabled');
            if (currentPage === totalPages) {
                nextPageButton.setAttribute('disabled', 'true');
            }
        }
    });
}

// Initialize the soundboard
function init() {
    displayAudioSamples();
    handlePagination();
}

init();
// Function to convert text to speech
function convertTextToSpeech(text) {
    const speechSynthesis = window.speechSynthesis;
    const speechUtterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speechUtterance);
}

// Event listener for text-to-speech button
const textToSpeechButton = document.getElementById('text-to-speech-button');
textToSpeechButton.addEventListener('click', () => {
    const textToSpeechInput = document.getElementById('text-to-speech-input').value;
    if (textToSpeechInput.trim() !== '') {
        convertTextToSpeech(textToSpeechInput);
    }
});
