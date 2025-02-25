// Select audio and canvas elements
const audioElement = document.getElementById("audio");
const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");

// Resize canvas dynamically
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.8;

// Setup Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const source = audioContext.createMediaElementSource(audioElement);
const analyser = audioContext.createAnalyser();

// Connect nodes
source.connect(analyser);
analyser.connect(audioContext.destination);

// Configure analyser for higher precision
analyser.fftSize = 512; // More bins = higher precision
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

// Animation function
function draw() {
    requestAnimationFrame(draw);
    
    analyser.getByteFrequencyData(dataArray);

    // Clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw visualizer bars at the bottom
    const barWidth = (canvas.width / bufferLength) * 2.5;  // Width of each bar
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        // Dynamic blue color effect based on frequency data
        const blue = 255 - barHeight; // Change the blue intensity based on frequency data

        // Draw vertical bars at the bottom
        ctx.fillStyle = `rgb(0, 0, ${blue})`; // Blue color for bars
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight); // Bar position and size

        x += barWidth + 1; // Move x position for next bar
    }
}

// Start visualization when audio plays
audioElement.onplay = () => {
    audioContext.resume().then(() => {
        draw();
    });
};

// Resize canvas on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.8;
});
