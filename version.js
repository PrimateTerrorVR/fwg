// Create a version display element
const versionDisplay = document.createElement("div");
versionDisplay.style.position = "absolute";
versionDisplay.style.top = "10px";
versionDisplay.style.right = "10px";
versionDisplay.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
versionDisplay.style.padding = "5px 10px";
versionDisplay.style.borderRadius = "5px";
versionDisplay.style.fontFamily = "Arial, sans-serif";
versionDisplay.style.fontSize = "14px";
versionDisplay.style.cursor = "pointer";
versionDisplay.innerText = "Version: Beta";

// Add a click event to the version display
versionDisplay.addEventListener("click", () => {
    alert("More questions are coming soon!");
});

// Append the version display to the body
document.body.appendChild(versionDisplay);
