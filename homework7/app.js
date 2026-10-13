console.log("Hello World!");

let button = document.getElementById("downloadResume");
const name = "Hayden";
let hasDownloadedResume = false;

button.addEventListener("click", function() {
    if (hasDownloadedResume == false) {
        alert("Your resume is downloaded successfully!");
        hasDownloadedResume = true;
    }
});

function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

function daysUntilDeadline(deadline) {
    let currentDate = new Date();
    let projectDeadline = new Date(deadline);

    let difference = projectDeadline - currentDate;

    let days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return days;
}

let remainingDays = daysUntilDeadline("2026-12-01");

document.getElementById("daysRemaining").textContent = remainingDays + " days remaining";
document.getElementById("greeting").textContent = showGreeting(name);