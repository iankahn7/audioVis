Music Visualizer - waterjon
This project is a music visualizer that displays dynamic frequency data from an audio file. The visualizer uses the Web Audio API and HTML5 Canvas to render a series of vertical bars that represent the audio frequency spectrum, along with an interactive background. As the audio plays, the bars adjust in real-time to reflect the frequencies of the music, providing an engaging visual experience.

Features
Frequency Bars: The visualizer shows bars at the bottom of the screen that represent the different frequency bands of the audio.
Dynamic Colors: The color of each bar changes dynamically based on the intensity of the frequency data.
Mobile Friendly: The visualizer is responsive and adjusts to fit different screen sizes.
Interactive Background: A subtle blue-to-black gradient background adds to the immersive experience (with bars drawn on top).
Mouse-Tracking Particles: Particles follow the mouse cursor, adding an interactive and dynamic element to the visualization.
Setup
To use this music visualizer, follow these steps:

1. Clone the repository
Clone the repository to your local machine:

bash
Copy
Edit
git clone https://github.com/your-username/music-visualizer.git
2. Files to include
Ensure the following files are present in the project folder:

index.html - The main HTML file that includes the layout.
script.js - JavaScript file that handles the audio analysis, rendering, and animation.
Your Audio File (e.g., your-audio-file.mp3) - The audio file that will be visualized.
3. Open the project
You can open the project by navigating to the project folder in your browser or using a live server.

To run it locally, simply open index.html in a browser of your choice.

If you want to use a live server:

Install the "Live Server" extension in Visual Studio Code (VSCode).
Right-click on index.html and select Open with Live Server to preview the project in your browser.
4. Modify the Audio Source
To use your own audio file, replace the audio file in the <audio> tag inside index.html. Make sure to provide the correct path to your .mp3 or .ogg file:

html
Copy
Edit
<audio id="audio" controls>
    <source src="your-audio-file.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
How It Works
Web Audio API: The visualizer uses the Web Audio API to analyze the audio file. Specifically, the AnalyserNode is used to capture frequency data.
Canvas Rendering: The frequency data is displayed on an HTML5 <canvas> element, with bars dynamically sized based on the frequency amplitude.
Animation: A continuous animation loop is used to keep the visualizer updated in real-time as the audio plays.
Code Breakdown:
audioElement: Represents the audio element that is played.
analyser: The Web Audio API's analyser node that processes the audio data.
dataArray: An array that holds the frequency data used to render the bars.
draw(): A function that updates the canvas on each frame to render the frequency bars and background effects.
Customization
Feel free to modify the following:

Bar Colors: The current bars are rendered with blue colors, but you can adjust this by changing the ctx.fillStyle values in the draw() function.
Audio File: Replace the audio source with any .mp3 or .ogg file you prefer.
Canvas Size: The canvas adjusts to the browser window size, but you can adjust the width and height as desired in the JavaScript code.