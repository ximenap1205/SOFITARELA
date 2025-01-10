function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Formulario de contacto 
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name && email && message) {
        alert(`Gracias, ${name}. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.`);
        contactForm.reset();
      } else {
        alert('Por favor, completa todos los campos.');
      }
    });
  }
  