
if(window.location.pathname == "/index.html"){
    var homeAudio = document.getElementById("homeAudio");
    homeAudio.volume = 0.015;
    console.log("home page audio loaded!");
} else if(window.location.pathname == "/resume.html"){
    var resumeAudio = document.getElementById("resumeAudio");
    resumeAudio.volume = 0.02;
    console.log("resume page audio loaded!");
} else if(window.location.pathname == "/projects.html"){
    var projectAudio = document.getElementById("projectAudio");
    projectAudio.volume = 0.03;
    console.log("project page audio loaded!");
}else{
    console.log("No audio loaded!");
};