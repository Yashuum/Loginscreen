const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = form.elements['username'].value;
  const password = form.elements['password'].value;

  // Here you would typically make an AJAX request to your server to validate the username and password
  // and redirect the user to the main page if the credentials are correct

  if (username === 'admin' && password === 'password') {
    window.location.href = 'www.example.com';
  } else {
    alert('Invalid username or password');
  }
});
