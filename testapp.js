  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log('Form Data:', data);
  });