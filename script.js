document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("changeButton");
    let image = document.getElementById("memeImage");
    let sound = document.getElementById("clickSound");
    let themeButton = document.getElementById("toggleTheme");
    let isDarkMode = false;

    let images = ["images/nerd.jpg", "images/sigma.jpg"];
    let index = 0;

    button.addEventListener("click", function () {
        index = (index + 1) % images.length;
        image.style.opacity = 0;
        sound.play();

        setTimeout(() => {
            image.src = images[index];
            image.style.opacity = 1;
        }, 500);
    });

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        isDarkMode = !isDarkMode;
        themeButton.textContent = isDarkMode ? "☀️ Mode Terang" : "🌙 Mode Gelap";
    });

    let text = "COBA TEKAN TOMBOL INI";
    let i = 0;
    function typeWriterEffect() {
        if (i < text.length) {
            document.getElementById("typewriter").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriterEffect, 100);
        }
    }

    document.getElementById("typewriter").textContent = "";
    typeWriterEffect();
});
