// Display Admin Info
document.getElementById("adminButton").addEventListener("click", () => {
    alert("Admin Info:\nName: John Doe\nFacebook: fb.com/johndoe\nTwitter: twitter.com/johndoe");
});

// Display Current Date and Time
function updateDateTime() {
    const dateTimeElement = document.getElementById("dateTime");
    const now = new Date();
    dateTimeElement.textContent = `Current Date & Time: ${now.toLocaleString()}`;
}

// Update date and time every second
setInterval(updateDateTime, 1000);
updateDateTime();
