// script.js

// Typing Effect
const typingEffect = (element, text, delay) => {
    let index = 0;
    const type = () => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
    };
    type();
};

// Countdown Timer
const countdown = (endDate) => {
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED';
        }
    }, 1000);
};

// Button Logic
document.getElementById('myButton').addEventListener('click', () => {
    alert('Button clicked!');
});

// Heart Explosions
const explodeHearts = () => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    document.body.appendChild(heart);
    // Add explosion effect here
};

// Particle Animations
const createParticles = (x, y) => {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        document.body.appendChild(particle);
        // Position and animation logic here
    }
};

// Calculator Functionality
const calculate = (num1, num2) => {
    return num1 + num2;  // Replace with desired calculation
};

// Event Handlers
document.getElementById('calculateButton').addEventListener('click', () => {
    const result = calculate(Number(document.getElementById('num1').value), Number(document.getElementById('num2').value));
    document.getElementById('result').innerText = `Result: ${result}`;
});

// Initialize countdown
const endDate = new Date('2026-02-14T00:00:00Z').getTime();
countdown(endDate);

// Initialize typing effect
const typingElement = document.getElementById('typingEffect');
typingEffect(typingElement, 'Happy Valentine`s Day!', 100);