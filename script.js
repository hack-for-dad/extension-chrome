const fatherImg = [
    "dad",
    "king",
    "king2",
    "king3",
    "king4",
    "king5",
    "king6",
    "king7",
    "king8",
];

let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Charm&display=swap";
document.head.appendChild(link);
let link2 = document.createElement("link");
link2.rel = "preconnect";
link2.href = "https://fonts.gstatic.com";
document.head.appendChild(link2);
let link3 = document.createElement("link");
link3.rel = "preconnect";
link3.href = "https://fonts.googleapis.com";
link3.crossOrigin = "true";
document.head.appendChild(link3);


// ========================
// Change text fonts to "Charm"
// ========================
setInterval(() => {
    document.querySelectorAll("*").forEach(function (node) {
        node.style.fontFamily = "Charm";
    });
},1000);

// ========================
// Replace all images
// ========================

// Find all images and replace with "/assets/dad.png"
setInterval(() => {
    document.querySelectorAll("img").forEach(function (img) {
        if (img.src.startsWith("chrome-extension://")) return;
        // Keep same width and height
        img.style.width = img.offsetWidth + "px";
        img.style.height = img.offsetHeight + "px";
        // Replace image
        img.src = chrome.runtime.getURL(
            `/assets/${fatherImg[Math.floor(Math.random() * fatherImg.length)]}.jpg`
        );
        // Set background size to cover
        img.style.objectFit = "cover";
    });
}, 1000);

// ========================
// Replace all videos
// ========================

// Find all videos and replace with sansern
setInterval(() => {
    document.querySelectorAll("video").forEach(function (video) {
        if (video.src.startsWith("chrome-extension://")) return;
        // Replace video
        video.src = chrome.runtime.getURL("/assets/sansern.webm");
    });

    // iframes
    document.querySelectorAll("iframe").forEach(function (iframe) {
        if (iframe.src.startsWith("chrome-extension://")) return;
        // Replace video
        iframe.src = chrome.runtime.getURL("/assets/sansern.webm");
    });
}, 1000);

// ========================
// Replace all audios
// ========================

setInterval(() => {
    document.querySelectorAll("audio").forEach(function (audio) {
        if (audio.src.startsWith("chrome-extension://")) return;
        // Replace video
        audio.src = chrome.runtime.getURL("/assets/sansern.webm");
    });
});

// ========================
// Pop Up "ทรงพระเจริญ" message (Unskipable for 30 seconds)
// ========================
window.onload = function (e) {
    let div = document.createElement("div");
    div.style.width = "100vw";
    div.style.height = "100vh";
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.zIndex = "99999999999";
    div.style.backgroundColor = "yellow";

    let txt = document.createElement("h1");
    txt.style.fontSize = "100px";
    txt.innerText = "โปรดแตะเพื่อดำเนินการต่อ";
    txt.id = "ccos"

    let center = document.createElement("center");
    center.appendChild(txt);

    // Append
    div.appendChild(center);
    document.body.appendChild(div);

    div.addEventListener("click", () => {
        document.body.removeChild(div);

        // Play audio from "/assets/mv.mp3"
        let audio = new Audio(chrome.runtime.getURL("/assets/mv.mp3"));
        audio.play();

        document.body.style.overflow = "hidden";
        // Img Popup
        let img = document.createElement("img");
        img.style.width = "100vw";
        img.style.height = "100vh";
        img.style.position = "fixed";
        img.style.top = "0";
        img.style.left = "0";
        img.style.zIndex = "99999999999";
        img.style.backgroundColor = "yellow";
        img.src = chrome.runtime.getURL("/assets/tpjr.jpg");

        let c = document.createElement("center");
        // Append
        c.appendChild(img);
        document.body.appendChild(c);

        // End
        setTimeout(() => {
            document.body.removeChild(c);
            document.body.style.overflow = "auto";
            audio.pause();
        }, 13000);
    });
    // ========================
// Big 9 image at the top of the page
// ========================

    let img = document.createElement("img");
    img.style.width = "25vw";
    img.style.height = "40vh";

    let centers = document.createElement("center");
    centers.appendChild(img);

    // Append
    img.src = chrome.runtime.getURL("/assets/9.png");
    document.body.prepend(centers);
};
