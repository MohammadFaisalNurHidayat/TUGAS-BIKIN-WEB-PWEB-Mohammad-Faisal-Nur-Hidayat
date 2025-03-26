let player;

// 🔹 YouTube API Player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        height: '0',
        width: '0',
        videoId: '60ItHLz5WEA',
        playerVars: { 'autoplay': 0, 'controls': 0, 'playsinline': 1 },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    document.getElementById("playYoutube").addEventListener("click", function () {
        player.playVideo();
    });

    document.getElementById("pauseYoutube").addEventListener("click", function () {
        player.pauseVideo();
    });
}

// 🔹 Quotes Generator
const quotes = [
    "🚀 Keberhasilan adalah hasil dari kerja keras dan doa.",
    "🔥 Jangan pernah menyerah pada impianmu!",
    "💡 Setiap kesalahan adalah pelajaran untuk masa depan.",
    "🎯 Lakukan yang terbaik, hasil akan mengikuti."
];

document.getElementById("newQuote").addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
});

// 🔹 Mode Gelap
document.getElementById("toggleTheme").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// 🔹 Clock
function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("clock").innerText = `⏳ Waktu: ${timeString}`;
}
setInterval(updateClock, 1000);

// 🔹 Mode Hacker (Shift + Enter)
document.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.key === "Enter") {
        let matrixCanvas = document.getElementById("matrixCanvas");
        matrixCanvas.style.display = "block";
        startMatrixEffect();
    }
});

// 🔹 Matrix Effect
function startMatrixEffect() {
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#0F0";
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            let text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(draw, 50);
}
