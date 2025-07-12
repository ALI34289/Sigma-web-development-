document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav ul li a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll into view, aligning the top of the target element to the top of the viewport
                // Adjust offset if you have a fixed header
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Optional: Update active link (visual cue)
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Basic contact form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            let isValid = true;
            let errors = [];

            if (name === '') {
                isValid = false;
                errors.push('Name is required.');
                // You could add error display logic here, e.g., highlighting fields
            }

            if (email === '') {
                isValid = false;
                errors.push('Email is required.');
            } else {
                // Basic email format validation
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    isValid = false;
                    errors.push('Please enter a valid email address.');
                }
            }

            if (message === '') {
                isValid = false;
                errors.push('Message is required.');
            }

            if (!isValid) {
                e.preventDefault(); // Prevent form submission
                // For now, just an alert. In a real app, you'd display errors more gracefully.
                alert('Please correct the following errors:\n' + errors.join('\n'));
            } else {
                // Optional: If you want to simulate form submission without a backend for now
                // e.preventDefault();
                // alert('Form submitted successfully (simulated)!');
                // contactForm.reset();
                // console.log('Form data:', { name, email, message });
            }
        });
    }

    // Update footer year dynamically
    const currentYearSpan = document.querySelector('footer p');
    if (currentYearSpan && currentYearSpan.textContent.includes('[Current Year]')) {
        currentYearSpan.textContent = currentYearSpan.textContent.replace('[Current Year]', new Date().getFullYear());
    }

    // Placeholder for future JS:
    // - More advanced form validation and AJAX submission
    // - Interactive elements like carousels or modals
    // - Scroll animations
});
