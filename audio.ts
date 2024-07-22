export function playAudio(): void {
    if (window.location.href.includes("index.html")) {
      const homeAudio = document.getElementById("homeAudio") as HTMLAudioElement | null;
      if (homeAudio) {
        homeAudio.volume = 0.015;
        console.log(homeAudio);
      } else {
        console.log("homeAudio is null or undefined");
      }
    } else if (window.location.href.includes("resume.html")) {
      const resumeAudio = document.getElementById("resumeAudio") as HTMLAudioElement | null;
      if (resumeAudio) {
        resumeAudio.volume = 0.01;
        console.log(resumeAudio);
      } else {
        console.log("resumeAudio is null or undefined");
      }
    } else if (window.location.href.includes("projects.html")) {
      const projectAudio = document.getElementById("projectAudio") as HTMLAudioElement | null;
      if (projectAudio) {
        projectAudio.volume = 0.02;
        console.log(projectAudio);
      } else {
        console.log("projectAudio is null or undefined");
      }
    } else {
      console.log("No audio loaded!");
    }
  }
  