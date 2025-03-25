document.addEventListener("DOMContentLoaded", function () {
    const memes = ["images/nerd.jpg", "images/sigma.jpg"];let player;
let clickCount = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        height: '0',  // Sembunyikan video
        width: '0',
        videoId: 'QHJPnCjO7Do', // Ganti dengan ID video YouTube yang ingin diputar
        playerVars: { 'autoplay': 0, 'controls': 0 },
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

document.addEventListener("DOMContentLoaded", function () {
    const memes = ["images/nerd.jpg", "images/sigma.jpg"];
    const texts = ["Skill Issue!", "Sigma Mindset!"];
    const memeImage = document.getElementById("memeImage");
    const button = document.getElementById("clickButton");
    const themeButton = document.getElementById("toggleTheme");
    const chatbotButton = document.getElementById("chatbotButton");
    const chatbot = document.getElementById("chatbot");
    const chatbotMessages = document.getElementById("chatbotMessages");
    const chatbotInput = document.getElementById("chatbotInput");
    const sendChat = document.getElementById("sendChat");
    const statusText = document.getElementById("statusText");

    // 🔊 Text-to-Speech
    function speak(text) {
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = "id-ID";
        speech.rate = 1.0;
        window.speechSynthesis.speak(speech);
    }

    // 🎲 Event tombol ditekan (Random Meme + Suara + Hitung Klik)
    button.addEventListener("click", function () {
        if (confirm("Yakin mau klik?")) {
            let randomIndex = Math.floor(Math.random() * memes.length);
            memeImage.src = memes[randomIndex];

            let randomText = texts[randomIndex];
            speak(randomText);
            statusText.innerText = randomText;
            
            clickCount++;
            document.getElementById("clickCount").innerText = clickCount;
        }
    });

    // 🌙 Mode Gelap & Terang
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // 🤖 Chatbot Sederhana
    chatbotButton.addEventListener("click", function () {
        chatbot.style.display = chatbot.style.display === "none" ? "block" : "none";
    });

    sendChat.addEventListener("click", function () {
        let userInput = chatbotInput.value;
        chatbotMessages.innerHTML += `<p><strong>Kamu:</strong> ${userInput}</p>`;
        chatbotMessages.innerHTML += `<p><strong>Bot:</strong> Aku belum cukup pintar 😅</p>`;
        chatbotInput.value = "";
    });
});

    const texts = ["Skill Issue!", "Sigma Mindset!"];
    const memeImage = document.getElementById("memeImage");
    const button = document.getElementById("clickButton");
    const themeButton = document.getElementById("toggleTheme");
    const musicButton = document.getElementById("toggleMusic");
    const chatbotButton = document.getElementById("chatbotButton");
    const chatbot = document.getElementById("chatbot");
    const chatbotMessages = document.getElementById("chatbotMessages");
    const chatbotInput = document.getElementById("chatbotInput");
    const sendChat = document.getElementById("sendChat");
    const statusText = document.getElementById("statusText");
    const bgMusic = document.getElementById("bgMusic");
    const clickCount = document.getElementById("clickCount");
    let count = 0;
    let isDarkMode = false;
    let isPlaying = false;

    // 🔊 Text-to-Speech
    function speak(text) {
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = "id-ID";
        speech.rate = 1.0;
        window.speechSynthesis.speak(speech);
    }

    // 🎲 Event tombol ditekan (Random Meme + Suara + Hitung Klik)
    button.addEventListener("click", function () {
        if (confirm("Yakin mau klik?")) {
            let randomIndex = Math.floor(Math.random() * memes.length);
            memeImage.src = memes[randomIndex];

            let randomText = texts[randomIndex];
            speak(randomText);
            statusText.innerText = randomText;
            
            count++;
            clickCount.innerText = count;
        }
    });

    // 🌙 Mode Gelap & Terang
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        isDarkMode = !isDarkMode;
        themeButton.textContent = isDarkMode ? "☀️ Mode Terang" : "🌙 Mode Gelap";
    });

    // 🎵 Play/Pause Musik
    musicButton.addEventListener("click", function () {
        if (isPlaying) {
            bgMusic.pause();
            musicButton.textContent = "🎵 Play BGM";
        } else {
            bgMusic.play();
            musicButton.textContent = "⏸ Pause BGM";
        }
        isPlaying = !isPlaying;
    });

    // 🕵️ Mode Rahasia (Shift + Enter)
    document.addEventListener("keydown", function (event) {
        if (event.shiftKey && event.key === "Enter") {
            document.body.classList.toggle("dark-mode");
            alert("🔥 Mode Hacker Aktif! 🔥");
        }
    });

    // 🤖 Chatbot Sederhana
    chatbotButton.addEventListener("click", function () {
        chatbot.style.display = chatbot.style.display === "none" ? "block" : "none";
    });

    sendChat.addEventListener("click", function () {
        let userInput = chatbotInput.value;
        chatbotMessages.innerHTML += `<p><strong>Kamu:</strong> ${userInput}</p>`;
        chatbotMessages.innerHTML += `<p><strong>Bot:</strong> Aku belum cukup pintar 😅</p>`;
        chatbotInput.value = "";
    });
});
