if (window.location.href.includes("index.html")) {
    var homeAudio = document.getElementById("homeAudio");
    homeAudio.volume = 0.015;
    console.log(homeAudio); // Check if homeAudio is null or undefined
} else if (window.location.href.includes("resume.html")) {
    var resumeAudio = document.getElementById("resumeAudio");
    resumeAudio.volume = 0.01;
    console.log(homeAudio); // Check if homeAudio is null or undefined
} else if (window.location.href.includes("projects.html")) {
    var projectAudio = document.getElementById("projectAudio");
    projectAudio.volume = 0.02;
    console.log(homeAudio); // Check if homeAudio is null or undefined
} else {
    console.log("No audio loaded!");
<<<<<<< Updated upstream
}
=======
};
>>>>>>> Stashed changes
