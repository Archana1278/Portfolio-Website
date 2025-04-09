// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
  } else {
    themeToggle.textContent = 'Dark Mode';
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Validation and Message Handling
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    // Show success message
    formMessage.textContent = 'Message sent successfully!';
    formMessage.className = 'success';
    formMessage.style.display = 'block';

    // Reset the form
    form.reset();
  } else {
    // Show error message
    formMessage.textContent = 'Please fill out all fields.';
    formMessage.className = 'error';
    formMessage.style.display = 'block';
  }

  // Auto-dismiss the message after 5 seconds
  setTimeout(() => {
    formMessage.style.display = 'none';
  }, 5000);
});