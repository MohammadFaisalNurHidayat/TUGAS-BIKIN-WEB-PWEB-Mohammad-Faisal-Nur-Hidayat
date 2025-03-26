// Mode Gelap/Terang
document.getElementById("toggleMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Ganti Warna Acak
document.getElementById("changeColor").addEventListener("click", function () {
    const colors = ["red", "green", "blue", "purple", "yellow"];
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
});

// Konfeti 🎉
document.getElementById("confettiButton").addEventListener("click", function () {
    alert("🎉 Boom! Konfeti dimulai!");
});

// Countdown Timer (Hitung Mundur Turnamen)
function updateCountdown() {
    const eventDate = new Date("2025-12-31 23:59:59");
    const now = new Date();
    const diff = eventDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdownTimer").textContent = `${days} Hari ${hours}:${minutes}:${seconds}`;
}
setInterval(updateCountdown, 1000);

// Game Tebak Angka
let randomNumber = Math.floor(Math.random() * 10) + 1;
document.getElementById("checkGuess").addEventListener("click", function () {
    let userGuess = document.getElementById("guessInput").value;
    if (userGuess == randomNumber) {
        document.getElementById("resultMessage").textContent = "🎉 Selamat! Angka Benar!";
    } else {
        document.getElementById("resultMessage").textContent = "❌ Salah! Coba Lagi.";
    }
});
