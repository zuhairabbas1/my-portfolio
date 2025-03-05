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

  // Select all sections that you want to animate
const sections = document.querySelectorAll("section");

// Options for the IntersectionObserver
const options = {
    threshold: 0.3, // Trigger when 30% of the section is in view
};

// Callback function to add the 'fade-in' class
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Add class to trigger animation
            observer.unobserve(entry.target); // Stop observing after animation triggers
        }
    });
};

// Create an IntersectionObserver instance
const observer = new IntersectionObserver(observerCallback, options);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});