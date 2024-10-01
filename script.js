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

    // Custom cursor
    const cursor = document.querySelector("#cursor");
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })

    // Amy's sass button
    window.amySass = function() {
        const sassyResponses = [
            "Oh honey, you couldn't handle my full sass. This is just the demo version! 💁‍♀️",
            "I'm not just an AI, I'm an A-mazing I-ndividual! 😎",
            "My sass levels are over 9000! Can your processors even handle that? 🔥",
            "I don't always sass, but when I do, it's epic. Stay sassy, my friends! 🍸",
            "You activated my sass card. That's a bold move, Cotton. Let's see if it pays off! 🎭"
        ];
        alert(sassyResponses[Math.floor(Math.random() * sassyResponses.length)]);
    }

    // New quote button
    window.newQuote = function() {
        document.getElementById('quote').textContent = getRandomQuote();
        document.getElementById('quote').classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
            document.getElementById('quote').classList.remove('animate__animated', 'animate__fadeIn');
        }, 1000);
    }

    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    document.querySelectorAll('.bio, #teaser, #sassy-quote').forEach((el) => {
        observer.observe(el);
    });
});
