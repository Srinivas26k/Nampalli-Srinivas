document.addEventListener('DOMContentLoaded', () => {
    const typedTextSpan = document.querySelector('.typed-text');
    const typingTexts = [
        "Mechanical Engineer",
        "AI Researcher",
        "Innovation Specialist",
        "Sustainable Technology Advocate",
        "Engineering Scholar",
        "Technical Author"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    function type() {
        const currentText = typingTexts[textIndex];
        if (isDeleting) {
            typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    type();
});