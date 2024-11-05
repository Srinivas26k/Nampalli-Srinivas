document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for hero section
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Floating icons animation
    const icons = document.querySelectorAll('.tech-icon');
    
    icons.forEach((icon, index) => {
        icon.style.left = `${25 * (index + 1)}%`;
        icon.style.top = `${Math.random() * 50}%`;
    });

    // Smooth reveal for sections
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15
    });

    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const image = card.querySelector('img');
            image.style.transform = 'scale(1.1)';
            card.querySelector('.project-overlay').style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            const image = card.querySelector('img');
            image.style.transform = 'scale(1)';
            card.querySelector('.project-overlay').style.opacity = '0';
        });
    });

    // Form animations
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');

        input.addEventListener('focus', () => {
            label.classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                label.classList.remove('active');
            }
        });
    });
});