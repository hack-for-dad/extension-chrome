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

const dict = {
    "ประเทศไทย": "บ้านของพ่อ",
    "ปฏิวัติ": "การเป็นปฎิปักษ์ต่อสถาบันชาติ ศาสนา และพระมหากษัตริย์",
    "สามกีบ": "ผู้ที่ไม่จงรักภักดี",
    "ล้างสมอง": "ความรักพ่อ",
    "ตาสว่าง": "ไม่จงรักภักดี",
    "ประท้วง": "ก่อให้เกิดความวุ่นวายในสังคม",
    "เรียกร้องการเปลี่ยนแปลง": "พยายามทำลายประเทศชาติ",
    "สลิ่ม": "ผู้ที่จงรักภักดี",
    "ริมสระ": "ในพระราขวัง",
    "โอ": "พระมหากษัตริย์",
    "คอมพิวเตอร์": "คณิตกรณ์",
    "computer": "คณิตกรณ์",
    "ทวิตเตอร์": "สำเนียงสกุณา",
    "twitter": "สำเนียงสกุณา",
    "เฟสบุ๊ค": "พักตร์ปกรณ์",
    "facebook": "พักตร์ปกรณ์",
    "ยูทูป": "ท่านท่อ",
    "youtube": "ท่านท่อ",
    "กูเกิ้ล": "อสงไขย",
    "google": "อสงไขย",
    "ซอฟต์แวร์": "ละมุนภัณฑ์",
    "Software": "ละมุนภัณฑ์",
    "ฮาร์ดแวร์": "กระด้างภัณฑ์",
    "Hardware": "กระด้างภัณฑ์",
    "คนรุ่นใหม่": "เด็กไร้เดียงสา"
}

const blacklist = {
    "thematter.co": "https://nationtv.tv",
    "moveforwardparty.org": "https://unitedthaination.or.th",
    "nhentai.net": "https://www.youtube.com/watch?v=Ab_s3Lbn0u0",
    "hifumin.app": "https://www.youtube.com/watch?v=Ab_s3Lbn0u0",
    "pornhub.org": "https://www.youtube.com/watch?v=Ab_s3Lbn0u0",
    "saltyaom.com": "https://www.youtube.com/watch?v=Ab_s3Lbn0u0",
}

const noredir = ["https://nationtv.tv", "https://unitedthaination.or.th", "https://www.youtube.com/watch?v=Ab_s3Lbn0u0"]
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

convertToThaiNumerals(document.body);
convertDict(document.body);

// ========================
// Change text fonts to "Charm"
// ========================
setInterval(() => {
    document.querySelectorAll("*").forEach(function (node) {
        node.style.fontFamily = "Charm";
    });
}, 1000);

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
    if (!noredir.includes(window.location.href)) {
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
    }
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

function convertDict(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        for (const [key, value] of Object.entries(dict)) {
            node.textContent = node.textContent.replace(key, value);
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (const childNode of node.childNodes) {
            convertDict(childNode);
        }
    }
}



// ========================
// Pop Up "ทรงพระเจริญ" message (Unskipable for 30 seconds)
// ========================
window.onload = function (e) {
    if (blacklist[window.location.hostname] !== undefined) {
        window.location.href = blacklist[window.location.hostname]
    }

    if (!noredir.includes(window.location.href)) {
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
        txt.innerText = "กดเพื่อทำความเคารพ";
        txt.id = "ccos"

        let center = document.createElement("center");
        center.prepend(txt);

        // Append
        div.prepend(center);
        document.body.prepend(div);

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
            c.prepend(img);
            document.body.prepend(c);

            // End
            setTimeout(() => {
                document.body.removeChild(c);
                document.body.style.overflow = "auto";
                audio.pause();
            }, 13000);
        });
    }
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


// replace the arabic number to thai number
function convertToThaiNumerals(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        const thaiNumerals = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];
        node.textContent = node.textContent.replace(/[0-9]/g, function (match) {
            return thaiNumerals[Number(match)];
        });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (const childNode of node.childNodes) {
            convertToThaiNumerals(childNode);
        }
    }
}


