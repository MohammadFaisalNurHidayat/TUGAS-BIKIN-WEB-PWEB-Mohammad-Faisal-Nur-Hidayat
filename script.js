const memes = ["nerd.jpg", "sigma.jpg"]; 
const texts = ["Skill Issue!", "Sigma Mindset!"];
const memeImage = document.getElementById("memeImage");
const button = document.getElementById("clickButton");


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
    }
});


document.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.key === "Enter") {
        document.body.classList.toggle("hacker-mode");
    }
});
