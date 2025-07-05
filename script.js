// Smooth scrolling functionality
function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project cards and sections
    const animatedElements = document.querySelectorAll('.project-card, .section-title, .contact-description');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add a typing effect to the hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Store the original HTML structure
        const originalHTML = heroTitle.innerHTML;
        // Extract just the text content for the typing effect
        const textContent = heroTitle.textContent;
        
        // Clear the content and set up the structure
        heroTitle.innerHTML = 'Hi, I\'m <span class="highlight"></span>';
        const highlightSpan = heroTitle.querySelector('.highlight');
        heroTitle.style.opacity = '1';
        
        let i = 0;
        const targetText = 'Elye';
        
        function typeWriter() {
            if (i < targetText.length) {
                highlightSpan.textContent += targetText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add floating animation to the avatar
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        let isFloating = true;
        
        function floatAnimation() {
            if (isFloating) {
                avatar.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    if (isFloating) {
                        avatar.style.transform = 'translateY(0px)';
                    }
                }, 2000);
            }
        }
        
        avatar.style.transition = 'transform 2s ease-in-out';
        setInterval(floatAnimation, 4000);
        
        // Stop floating on hover
        avatar.addEventListener('mouseenter', () => {
            isFloating = false;
            avatar.style.transform = 'translateY(0px) scale(1.05)';
        });
        
        avatar.addEventListener('mouseleave', () => {
            isFloating = true;
            avatar.style.transform = 'translateY(0px) scale(1)';
        });
    }
});

// Add a simple function to update project links when ready
function addProjectLink(cardIndex, title, description, link, linkText = 'View Project') {
    const projectCards = document.querySelectorAll('.project-card');
    const card = projectCards[cardIndex];
    
    if (card && card.classList.contains('placeholder')) {
        // Remove placeholder class and update content
        card.classList.remove('placeholder');
        
        // Update content
        const titleElement = card.querySelector('h3');
        const descElement = card.querySelector('p');
        const linksElement = card.querySelector('.project-links');
        
        if (titleElement) titleElement.textContent = title;
        if (descElement) descElement.textContent = description;
        if (linksElement) {
            linksElement.innerHTML = `
                <a href="${link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    ${linkText}
                </a>
            `;
        }
        
        // Add border and hover effects
        card.style.border = '1px solid var(--border)';
        card.style.background = 'var(--background)';
    }
}

// Example usage (uncomment and modify when you have projects to add):
// addProjectLink(0, 'My Web App', 'A description of my awesome web application', 'https://myapp.com', 'Visit App');
