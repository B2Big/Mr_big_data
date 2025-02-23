// Particles.js Smoother Data Stream Configuration
document.addEventListener('DOMContentLoaded', function () {
    const screenWidth = window.innerWidth;
    let particleCount = screenWidth > 1200 ? 200 : screenWidth > 768 ? 150 : 100;

    particlesJS("particles-js", {
        "particles": {
            "number": { 
                "value": particleCount, 
                "density": { 
                    "enable": true, 
                    "value_area": 1000 
                } 
            },
            "color": { "value": ["#8be9fd", "#ff6bc6", "#d881f9", "#50fa7b"] },
            "shape": { "type": ["circle", "edge"] },
            "opacity": { 
                "value": 0.8, 
                "random": true, 
                "anim": { "enable": true, "speed": 1, "opacity_min": 0.3 } 
            },
            "size": { 
                "value": 2.5, 
                "random": true, 
                "anim": { "enable": true, "speed": 2, "size_min": 0.8 } 
            },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#383b4f",
                "opacity": 0.5,
                "width": 1.2
            },
            "move": {
                "enable": true,
                "speed": 1,
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
                "grab": { "distance": 150, "line_linked": { "opacity": 1 } },
                "push": { "particles_nb": 10 }
            }
        },
        "retina_detect": true
    });

    const dataCascade = document.querySelector('.data-cascade');
    const colors = ['#8be9fd', '#ff6bc6', '#d881f9', '#50fa7b'];
    for (let i = 0; i < 150; i++) {
        const bit = document.createElement('span');
        bit.textContent = Math.random() > 0.5 ? '1' : '0';
        bit.style.position = 'absolute';
        bit.style.left = `${Math.random() * 100}%`;
        bit.style.top = `${Math.random() * 100}%`;
        bit.style.fontSize = `${Math.random() * 0.8 + 0.4}rem`;
        bit.style.color = colors[Math.floor(Math.random() * colors.length)];
        bit.style.opacity = 1;
        dataCascade.appendChild(bit);
    }

    gsap.to('.data-cascade span', {
        x: () => (Math.random() - 0.5) * 300,
        y: () => (Math.random() - 0.5) * 300,
        scale: () => Math.random() * 1 + 0.5,
        rotation: () => Math.random() * 180,
        opacity: 0,
        duration: 1.8,
        stagger: 0.015,
        ease: "power2.out",
        onComplete: () => gsap.set('.data-cascade', { display: 'none' })
    });

    gsap.from(".animate-text", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 1.8,
        stagger: 0.3,
        ease: "power3.out"
    });

    gsap.from(".navbar", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out"
    });

    // Animations pour toutes les sections
    document.querySelectorAll('section').forEach(section => {
        gsap.from(section.querySelector('h2'), {
            scrollTrigger: {
                trigger: section,
                start: "top 80%"
            },
            opacity: 0,
            y: 50,
            duration: 1
        });

        gsap.from(section.querySelectorAll('p, .stats, .skills-grid, .projects-grid, form'), {
            scrollTrigger: {
                trigger: section,
                start: "top 80%"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2
        });
    });

    // Animation pour #vision - Sous-sections
    gsap.from("#vision h3", {
        scrollTrigger: {
            trigger: "#vision",
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    gsap.from("#vision .vision-bi-text", {
        scrollTrigger: {
            trigger: "#vision .vision-bi-text",
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
            document.querySelector("#vision .vision-bi-text").style.opacity = "1";
        }
    });

    gsap.from("#vision .vision-text", {
        scrollTrigger: {
            trigger: "#vision .vision-text",
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
            document.querySelector("#vision .vision-text").style.opacity = "1";
        }
    });

    gsap.from("#vision .vision-dbt-text", {
        scrollTrigger: {
            trigger: "#vision .vision-dbt-text",
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
            document.querySelector("#vision .vision-dbt-text").style.opacity = "1";
        }
    });

    gsap.from("#vision .vision-points p", {
        scrollTrigger: {
            trigger: "#vision .vision-points",
            start: "top 80%"
        },
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    gsap.from("#vision .vision-dbt-text", {
        scrollTrigger: {
            trigger: "#vision .vision-dbt-text",
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
            document.querySelector("#vision .vision-dbt-text").style.opacity = "1";
        }
    });

    const cursor = document.querySelector('.cursor');
    const trail = document.querySelector('.cursor-trail');
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursor, { 
            x: mouseX, 
            y: mouseY, 
            duration: 0.1 
        });

        gsap.to(trail, { 
            x: mouseX, 
            y: mouseY, 
            duration: 0.6, 
            ease: "power2.out" 
        });

        if (Math.random() > 0.7) {
            const particle = document.createElement('div');
            particle.className = 'cursor-particle';
            particle.style.left = `${mouseX}px`;
            particle.style.top = `${mouseY}px`;
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            document.body.appendChild(particle);

            gsap.to(particle, {
                x: mouseX + (Math.random() - 0.5) * 30,
                y: mouseY + (Math.random() - 0.5) * 30,
                opacity: 0,
                scale: 0.3,
                duration: 0.8,
                ease: "power2.out",
                onComplete: () => particle.remove()
            });
        }
    });

    document.querySelectorAll('.cta-button, .skill-card, .project-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                width: 24,
                height: 24,
                background: 'radial-gradient(circle, rgba(139, 233, 253, 0.6) 20%, transparent 80%)',
                duration: 0.3
            });
            const ripple = document.createElement('div');
            ripple.className = 'cursor-particle';
            ripple.style.width = '30px';
            ripple.style.height = '30px';
            ripple.style.left = `${mouseX}px`;
            ripple.style.top = `${mouseY}px`;
            ripple.style.background = 'transparent';
            ripple.style.border = '1px solid #8be9fd';
            document.body.appendChild(ripple);

            gsap.to(ripple, {
                scale: 1.5,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => ripple.remove()
            });

            if (el.classList.contains('skill-card') || el.classList.contains('project-card')) {
                for (let i = 0; i < 6; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'cursor-particle';
                    particle.style.left = `${mouseX}px`;
                    particle.style.top = `${mouseY}px`;
                    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                    document.body.appendChild(particle);

                    gsap.to(particle, {
                        x: mouseX + (Math.random() - 0.5) * 40,
                        y: mouseY + (Math.random() - 0.5) * 40,
                        opacity: 0,
                        scale: 0.3,
                        duration: 0.8,
                        ease: "power2.out",
                        onComplete: () => particle.remove()
                    });
                }
            }
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                width: 12,
                height: 12,
                background: 'radial-gradient(circle, #8be9fd 20%, transparent 80%)',
                duration: 0.3
            });
        });
    });

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log('Formulaire soumis avec :', new FormData(this));

            emailjs.sendForm('service_n92ki3i', 'template_5m6lkh7', this)
                .then(function (response) {
                    console.log('Succès :', response);
                    document.getElementById('form-message').textContent = 'Message sent successfully!';
                    form.reset();
                }, function (error) {
                    console.error('Erreur :', error);
                    document.getElementById('form-message').textContent = 'Failed to send message: ' + error.text;
                });
        });
    } else {
        console.error('Formulaire avec ID "contact-form" non trouvé');
    }

    const toggleButton = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.nav-links');
    toggleButton.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});