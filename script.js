// Menampilkan Jam Real-time
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = `⏳ Jam: ${timeString}`;
}
setInterval(updateClock, 1000);

// Event Tombol Klik
document.getElementById("clickMe").addEventListener("click", function() {
    document.getElementById("message").textContent = "Tombol telah diklik!";
    showToast("Anda menekan tombol!");
});

// Event Mode Gelap
document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    const modeText = document.body.classList.contains("dark-mode") ? "☀️ Mode Terang" : "🌙 Mode Gelap";
    this.textContent = modeText;
});

// Toast Notification
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}
