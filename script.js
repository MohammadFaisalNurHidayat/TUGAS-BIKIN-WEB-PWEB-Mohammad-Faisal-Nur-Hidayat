const heroData = {
    "Joy": {
        role: "Midlane",
        tier: "S+",
        meta: "Pick or Ban",
        description: "Joy adalah hero assassin dengan mobilitas tinggi dan damage magic yang besar.",
        youtube: "https://youtu.be/0i2lbiJYfJg"
    },
    "Hayabusa": {
        role: "Jungle",
        tier: "S+",
        meta: "Pick or Ban",
        description: "Hayabusa adalah assassin dengan skill bayangan yang lincah dan burst damage tinggi.",
        youtube: "https://youtu.be/p9XTnLcoZmU"
    },
    "Granger": {
        role: "Gold Lane",
        tier: "S+",
        meta: "Pick or Ban",
        description: "Granger adalah marksman dengan critical damage tinggi dan kemampuan burst yang luar biasa.",
        youtube: "https://youtu.be/g35JidIUk00"
    },
    "Fanny": {
        role: "Jungle",
        tier: "S+",
        meta: "Pick or Ban",
        description: "Fanny adalah assassin dengan kabel yang mematikan dan sangat sulit dikuasai.",
        youtube: "https://youtu.be/zoz27TwEf8A"
    },
    "Gatotkaca": {
        role: "Roam / EXP Lane",
        tier: "S",
        meta: "Meta Pick",
        description: "Gatotkaca adalah tank yang kuat dengan efek crowd control yang baik.",
        youtube: "https://youtu.be/9GeljaFfA3M"
    },
    "Julian": {
        role: "Jungle",
        tier: "S+",
        meta: "Pick or Ban",
        description: "Julian adalah fighter-mage hybrid yang memiliki berbagai kombinasi skill unik.",
        youtube: "https://youtu.be/bZsDau0G-pk"
    }
};

function showHeroInfo(hero) {
    const heroDescription = document.getElementById("hero-description");
    const youtubeLink = document.getElementById("youtube-link");

    heroDescription.innerHTML = `
        <h3>${hero}</h3>
        <p><strong>Role:</strong> ${heroData[hero].role}</p>
        <p><strong>Tier:</strong> ${heroData[hero].tier}</p>
        <p><strong>Status Meta:</strong> ${heroData[hero].meta}</p>
        <p>${heroData[hero].description}</p>
    `;
    
    youtubeLink.href = heroData[hero].youtube;
    youtubeLink.classList.remove("hidden");
}
