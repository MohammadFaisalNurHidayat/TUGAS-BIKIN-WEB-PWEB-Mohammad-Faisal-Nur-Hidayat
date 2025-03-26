// Scroll Progress Bar
window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("scrollProgress").style.width = progress + "%";
});

// Countdown Timer (Hitung Mundur Tahun Baru)
function updateCountdown() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = nextYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdownTimer").textContent = `${days} Hari ${hours}:${minutes}:${seconds}`;
}
setInterval(updateCountdown, 1000);

// To-Do List
document.getElementById("addTodo").addEventListener("click", function () {
    const task = document.getElementById("todoInput").value;
    if (task.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = task;

    li.addEventListener("click", function () {
        this.remove();
    });

    document.getElementById("todoList").appendChild(li);
    document.getElementById("todoInput").value = "";
});

// Text-to-Speech
document.getElementById("speakButton").addEventListener("click", function () {
    const text = document.getElementById("textToRead").value;
    if (text.trim() === "") return;

    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
});
