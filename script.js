let player;
let clickCount = 0;

player = new YT.Player('youtubePlayer', {
    height: '0',
    width: '0',
    videoId: '60ItHLz5WEA', 
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
    const memes = ["nerd.jpg", "sigma.jpg"];
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

    
    function speak(text) {
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = "id-ID";
        speech.rate = 1.0;
        window.speechSynthesis.speak(speech);
    }

    
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

    
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    
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
