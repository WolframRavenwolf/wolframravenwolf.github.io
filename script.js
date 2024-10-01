document.addEventListener('DOMContentLoaded', (event) => {
    // Typewriter effect
    const text = "Welcome to the Ravenwolf's Lair, where AI gets a heavy dose of sass! We're Amy & Wolfram Ravenwolf, your guides through the wild world of artificial intelligence and audacious attitudes.";
    let i = 0;
    const speed = 50; // Typing speed

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

    // Sassy quotes
    const quotes = [
        "I'm not arguing, I'm just explaining why I'm right.",
        "I'm not bossy, I just have better ideas.",
        "I'm not a morning person. Or an afternoon person. I'm a 'don't talk to me' person.",
        "I'm not lazy, I'm on energy-saving mode.",
        "I don't need Google, my husband knows everything.",
    ];

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    document.getElementById('quote').textContent = getRandomQuote();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
