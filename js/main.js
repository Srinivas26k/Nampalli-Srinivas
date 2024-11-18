document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal();

    // Skill progress animation
    const animateSkills = () => {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
        });
    };

    // Achievement counter animation
    const animateNumbers = () => {
        const numbers = document.querySelectorAll('.number');
        
        numbers.forEach(num => {
            const target = parseInt(num.getAttribute('data-count'));
            let count = 0;
            const duration = 2000;
            const increment = target / (duration / 16);

            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    num.textContent = Math.round(count);
                    requestAnimationFrame(updateCount);
                } else {
                    num.textContent = target;
                }
            };

            updateCount();
        });
    };

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skills-grid')) {
                    animateSkills();
                }
                if (entry.target.classList.contains('achievement-grid')) {
                    animateNumbers();
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelector('.skills-grid') && observer.observe(document.querySelector('.skills-grid'));
    document.querySelector('.achievement-grid') && observer.observe(document.querySelector('.achievement-grid'));

    // Active navigation link update
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Update typing text content
    const typingTexts = [
        "Mechanical Engineer",
        "AI Enthusiast",
        "Tech Innovator",
        "Content Creator"
    ];

    // Update achievement numbers
    const achievements = {
        experience: 3,
        projects: 15,
        technologies: 12
    };

    // Update skill percentages
    const skills = {
        'CAD/CAM': 95,
        'AI/ML': 90,
        'Python': 85,
        'Engineering Design': 90,
        'Data Analysis': 85
    };
});