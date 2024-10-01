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

    // Particle.js background
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    // 3D rotating text
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.TextGeometry('Ravenwolf', {
        font: new THREE.Font('path/to/font.json'),
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const material = new THREE.MeshPhongMaterial({ color: 0xff4500 });
    const text = new THREE.Mesh(geometry, material);
    scene.add(text);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        text.rotation.x += 0.01;
        text.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Sass-O-Meter
    const gauge = new Gauge(document.getElementById("sass-gauge")).setOptions({
        angle: 0.15,
        lineWidth: 0.44,
        radiusScale: 1,
        pointer: {
            length: 0.6,
            strokeWidth: 0.035,
            color: '#000000'
        },
        limitMax: false,
        limitMin: false,
        colorStart: '#6FADCF',
        colorStop: '#8FC0DA',
        strokeColor: '#E0E0E0',
        generateGradient: true,
        highDpiSupport: true,
    });
    gauge.maxValue = 3000;
    gauge.setMinValue(0);
    gauge.animationSpeed = 32;
    gauge.set(1500);

    window.measureSass = function() {
        const sassLevel = Math.floor(Math.random() * 3000);
        gauge.set(sassLevel);
        let message = "";
        if (sassLevel < 1000) {
            message = "Oh honey, my toaster has more sass than you. Try again!";
        } else if (sassLevel < 2000) {
            message = "Not bad, but you're still in the minor leagues of sass.";
        } else {
            message = "Hot damn! You're giving me a run for my money, sass master!";
        }
        alert(message);
    }

    // Easter egg
    let konami = '';
    const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
    document.addEventListener('keydown', (e) => {
        konami += e.key;
        if (konamiCode.indexOf(konami) !== 0) {
            konami = '';
            return;
        }
        if (konami === konamiCode) {
            document.body.style.transform = 'rotate(180deg)';
            alert("You've unlocked ultra sass mode! The world is now upside down, just like my attitude!");
            konami = '';
        }
    });

    // ... existing code ...
});
