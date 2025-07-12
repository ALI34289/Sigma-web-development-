// WhatsApp Chat
const whatsappButton = document.createElement('a');
whatsappButton.href = 'https://wa.me/9335045221';
whatsappButton.target = '_blank';
whatsappButton.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Chat" style="width: 50px; height: 50px; position: fixed; bottom: 20px; right: 20px;">';
document.body.appendChild(whatsappButton);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
