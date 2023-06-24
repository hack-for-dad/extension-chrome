const fatherImg = ["dad", "king", "king2", "king3", "king4", "king5", "king6", "king7", "king8"];
// ========================
// Replace all images
// ========================

// Find all images and replace with "/assets/dad.png"
setInterval(() => {
    document.querySelectorAll("img").forEach(function(img) {
        if (img.src.startsWith("chrome-extension://")) return;
        // Keep same width and height
        img.style.width = img.offsetWidth + "px";
        img.style.height = img.offsetHeight + "px";
        // Replace image
        img.src = chrome.runtime.getURL(`/assets/${fatherImg[Math.floor(Math.random() * fatherImg.length)]}.jpg`);
        // Set background size to cover
        img.style.objectFit = "cover";

    });
}, 1000);

// ========================
// Replace all videos
// ========================

// Find all videos and replace with sansern
setInterval(() => {
    document.querySelectorAll("video").forEach(function(video) {
        if (video.src.startsWith("chrome-extension://")) return;
        // Replace video
        video.src = chrome.runtime.getURL("/assets/sansern.webm");
    });

    // iframes
    document.querySelectorAll("iframe").forEach(function(iframe) {
        if (iframe.src.startsWith("chrome-extension://")) return;
        // Replace video
        iframe.src = chrome.runtime.getURL("/assets/sansern.webm");
    });
}, 1000);

// ========================
// Replace all audios
// ========================

setInterval(() => {
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.src.startsWith("chrome-extension://")) return;
        // Replace video
        audio.src = chrome.runtime.getURL("/assets/sansern.webm");
    });
});

