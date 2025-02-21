// Particles.js Smoother Data Stream Configuration
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 250, "density": { "enable": true, "value_area": 1000 } },
        "color": { "value": ["#8be9fd", "#ff6bc6", "#d881f9", "#50fa7b"] }, /* Punchier Dracula colors */
        "shape": { "type": ["circle", "edge"] },
        "opacity": { "value": 0.8, "random": true, "anim": { "enable": true, "speed": 1.5, "opacity_min": 0.3 } }, /* More vibrant */
        "size": { "value": 2.5, "random": true, "anim": { "enable": true, "speed": 3, "size_min": 0.8 } }, /* Larger, punchier */
        "line_linked": {
            "enable": true,
            "distance": 120,
            "color": "#383b4f",
            "opacity": 0.5, /* Stronger lines */
            "width": 1.2
        },
        "move": {
            "enable": true,
            "speed": 2.5, /* Slightly faster for energy */
            "direction": "right",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": { "enable": true, "rotateX": 600, "rotateY": 1200 }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "grab": { "distance": 150, "line_linked": { "opacity": 1 } }, /* Full opacity on grab */
            "push": { "particles_nb": 10 } /* More particles on click */
        }
    },
    "retina_detect": true
});

// GSAP Animations
// Data Cascade in Hero
const dataCascade = document.querySelector('.data-cascade');
for (let i = 0; i < 50; i++) {
    const bit = document.createElement('span');
    bit.textContent = Math.random() > 0.5 ? '1' : '0';
    bit.style.position = 'absolute';
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.fontSize = '1rem';
    bit.style.color = '#8be9fd';
    dataCascade.appendChild(bit);
}

gsap.to('.data-cascade span', {
    y: 300,
    opacity: 0,
    duration: 1.5,
    stagger: 0.05,
    ease: "power2.in",
    onComplete: () => gsap.set('.data-cascade', { display: 'none' })
});

gsap.from(".animate-text", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 1.5,
    stagger: 0.3,
    ease: "power3.out"
});

gsap.from(".navbar", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out"
});

gsap.from("#about h2, #about p", {
    scrollTrigger: "#about",
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.3
});

gsap.from(".stat-item", {
    scrollTrigger: ".stats",
    opacity: 0,
    scale: 0.5,
    duration: 1,
    stagger: 0.2
});

gsap.from(".skill-card", {
    scrollTrigger: ".skills-grid",
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});

gsap.from(".project-card", {
    scrollTrigger: ".projects-grid",
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.2
});

gsap.from("section::before", {
    scrollTrigger: "section",
    opacity: 1,
    scaleY: 0,
    duration: 1,
    ease: "power2.out",
    onComplete: () => gsap.to("section::before", { opacity: 0, duration: 0.5 })
});

// Enhanced Mouse Cursor Effects
const cursor = document.querySelector('.cursor');
const trail = document.querySelector('.cursor-trail');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.1 });
    gsap.to(trail, { x: mouseX, y: mouseY, duration: 0.4, ease: "power2.out" });

    if (Math.random() > 0.6) { /* More frequent particles */
        const particle = document.createElement('div');
        particle.className = 'cursor-particle';
        particle.style.left = `${mouseX}px`;
        particle.style.top = `${mouseY}px`;
        document.body.appendChild(particle);

        gsap.to(particle, {
            x: mouseX + (Math.random() - 0.5) * 50,
            y: mouseY + (Math.random() - 0.5) * 50,
            opacity: 0,
            scale: 0.6,
            duration: 1.2,
            ease: "power2.out",
            onComplete: () => particle.remove()
        });
    }
});

// Hover Effects
document.querySelectorAll('.cta-button, .skill-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            width: 40,
            height: 40,
            background: 'radial-gradient(circle, rgba(139, 233, 253, 0.6) 20%, transparent 80%)', /* More punchy */
            duration: 0.3
        });
        const ripple = document.createElement('div');
        ripple.className = 'cursor-particle';
        ripple.style.width = '60px';
        ripple.style.height = '60px';
        ripple.style.left = `${mouseX}px`;
        ripple.style.top = `${mouseY}px`;
        ripple.style.background = 'transparent';
        ripple.style.border = '2px solid #8be9fd';
        document.body.appendChild(ripple);

        gsap.to(ripple, {
            scale: 1.8, /* Bigger ripple */
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            onComplete: () => ripple.remove()
        });

        if (el.classList.contains('skill-card') || el.classList.contains('project-card')) {
            for (let i = 0; i < 10; i++) { /* More particles */
                const particle = document.createElement('div');
                particle.className = 'cursor-particle';
                particle.style.left = `${mouseX}px`;
                particle.style.top = `${mouseY}px`;
                document.body.appendChild(particle);

                gsap.to(particle, {
                    x: mouseX + (Math.random() - 0.5) * 70,
                    y: mouseY + (Math.random() - 0.5) * 70,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    onComplete: () => particle.remove()
                });
            }
        }
    });

    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            width: 16,
            height: 16,
            background: 'radial-gradient(circle, #8be9fd 20%, transparent 80%)',
            duration: 0.3
        });
    });
});