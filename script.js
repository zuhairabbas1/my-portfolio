// Smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });  

// Listen for the form submission event
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Use EmailJS to send the form data
    emailjs.sendForm('service_wlyfwv8', 'template_5vy6hl4', this)
      .then(function() {
          // Show success message
          document.getElementById('form-response').innerHTML = "Message sent successfully!";
          document.getElementById('contact-form').reset(); // Optionally reset the form
      }, function(error) {
          // Show error message
          document.getElementById('form-response').innerHTML = "Failed to send message. Please try again.";
          console.error('EmailJS Error:', error);
      });
  });
  