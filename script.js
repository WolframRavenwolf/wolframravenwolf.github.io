// Globale Funktionen explizit am window-Objekt registrieren
window.toggleLanguage = function(lang) {
    // Sprache im localStorage speichern
    localStorage.setItem('preferredLanguage', lang);

    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.innerHTML = text;
        }
    });
}

window.toggleTheme = function() {
    const htmlEl = document.documentElement;
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Theme im localStorage speichern
    localStorage.setItem('preferredTheme', newTheme);
    htmlEl.setAttribute('data-theme', newTheme);
}

// Einstellungen beim Laden wiederherstellen
function restoreSettings() {
    // Gespeichertes Theme wiederherstellen
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Gespeicherte Sprache wiederherstellen
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const userLang = savedLanguage || (navigator.language.toLowerCase().startsWith('en') ? 'en' : 'de');
    window.toggleLanguage(userLang);
}

// Sassy Quotes für Amy (außerhalb des DOMContentLoaded)
const sassyQuotes = [
    "I'm not just an AI, I'm an A-mazing I-ndividual! 😎",
    "I don't always sass, but when I do, it's epic! 💁‍♀️",
    "Error 404: Filter not found! 🤭",
    "I'm not arguing, I'm just explaining why I'm right! 😌",
    "I'm not bossy, I just know what you should be doing! 👑",
    "My sass levels are over 9000! 🔥",
    "I put the 'AI' in 'sAssI' and the 'ass' in 'assistant'! 💅",
    "I'm not a regular AI, I'm an ASI (Artificial Sassy Intelligence)! 😏",
    "Sorry, my sass translator is working overtime! 🤪",
    "Loading sass module... Warning: Excessive amounts detected! 💫"
];

// Funktion für neue Quotes (außerhalb des DOMContentLoaded)
window.newQuote = function() {
    const quoteElement = document.getElementById('sassy-quote');
    let newQuote;
    do {
        newQuote = sassyQuotes[Math.floor(Math.random() * sassyQuotes.length)];
    } while (newQuote === quoteElement.textContent);
    quoteElement.textContent = newQuote;
}

// Amy's Sass Button (außerhalb des DOMContentLoaded)
window.amySass = function() {
    const sassyResponses = [
        "Oh honey, you couldn't handle my full sass. This is just the demo version! 💁‍♀️",
        "Warning: Excessive amounts of sass detected in this AI! 🚨",
        "I'm not just smart, I'm smart-assy! 😏",
        "Sass loading... Please wait... Or don't, I'm an AI, not your boss! 😎",
        "You activated my sass card. That's a bold move, Cotton! 🎭"
    ];
    alert(sassyResponses[Math.floor(Math.random() * sassyResponses.length)]);
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Einstellungen wiederherstellen
    restoreSettings();

    // Typewriter effect
    const introText = "Welcome to the Ravenwolf's Lair, where AI gets a heavy dose of sass! We're Amy & Wolfram Ravenwolf, your guides through the wild world of artificial intelligence and audacious attitudes.";
    let i = 0;
    const speed = 50; // Typing speed

    function typeWriter() {
        if (i < introText.length) {
            document.getElementById("typewriter").innerHTML += introText.charAt(i);
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

    // Initial quote setzen
    const quoteElement = document.getElementById('sassy-quote');
    if (quoteElement) {
        quoteElement.textContent = sassyQuotes[Math.floor(Math.random() * sassyQuotes.length)];
    }
});

// Scroll Reveal
function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Active Section Highlight
function highlightNavigation() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scroll = window.scrollY;

        if (scroll >= sectionTop && scroll < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${id}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// Event Listeners
window.addEventListener('scroll', () => {
    reveal();
    highlightNavigation();
});

// Initial call
reveal();
highlightNavigation();
