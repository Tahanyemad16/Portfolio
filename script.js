document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");

    // Initialize mobile menu first
    initMobileMenu();

    // Then initialize other components
    if (typeof particlesJS === 'function') {
        initParticles();
    } else {
        console.warn("particlesJS not loaded - skipping particle effects");
    }

    if (typeof gsap !== 'undefined') {
        initAnimations();
    } else {
        console.warn("GSAP not loaded - skipping animations");
    }
});

function initMobileMenu() {
    console.log("Initializing mobile menu functionality...");

    const openMenuBtn = document.getElementById('openMenu');
    const closeMenuBtn = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    // Debug: Log elements to verify they exist
    console.log("Menu Elements:", {
        openButton: openMenuBtn,
        closeButton: closeMenuBtn,
        menu: mobileMenu,
        overlay: menuOverlay
    });

    if (!openMenuBtn || !closeMenuBtn || !mobileMenu || !menuOverlay) {
        console.error("Critical Error: Mobile menu elements missing!");
        if (!openMenuBtn) console.error("openMenu button not found");
        if (!closeMenuBtn) console.error("closeMenu button not found");
        if (!mobileMenu) console.error("mobileMenu container not found");
        if (!menuOverlay) console.error("menuOverlay not found");
        return;
    }

    // Add click event for opening menu
    openMenuBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log("Menu open button clicked");

        mobileMenu.classList.add('open');
        menuOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';

        // Debug: Verify classes were added
        console.log("Current menu classes:", mobileMenu.className);
        console.log("Current overlay classes:", menuOverlay.className);
    });

    // Add click event for closing menu
    closeMenuBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log("Menu close button clicked");

        mobileMenu.classList.remove('open');
        menuOverlay.classList.remove('open');
        document.body.style.overflow = '';
    });

    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', function () {
        console.log("Overlay clicked - closing menu");

        mobileMenu.classList.remove('open');
        menuOverlay.classList.remove('open');
        document.body.style.overflow = '';
    });

    // Close menu when clicking menu links
    const menuLinks = document.querySelectorAll('#mobileMenu a');
    console.log(`Found ${menuLinks.length} menu links`);

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log("Menu link clicked - closing menu");

            mobileMenu.classList.remove('open');
            menuOverlay.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    console.log("Mobile menu initialization complete");
}

function initParticles() {
    console.log("Initializing particle effects...");

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#00F5FF", "#9747FF", "#FF00E5"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#9747FF",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    console.log("Particle effects initialized");
}

function initAnimations() {
    console.log("Initializing GSAP animations...");

    // Register ScrollTrigger plugin
    if (typeof ScrollTrigger === 'undefined') {
        console.error("ScrollTrigger plugin not available");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Animate sections
    const sections = gsap.utils.toArray("section");
    console.log(`Found ${sections.length} sections to animate`);

    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            immediateRender: false
        });
    });

    console.log("GSAP animations initialized");
}

// Debug: Check if script loaded
console.log("portfolio-script.js loaded successfully");