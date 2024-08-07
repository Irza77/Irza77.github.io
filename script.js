document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Pesan terkirim!';
        document.getElementById('form-message').style.color = 'green';
    } else {
        document.getElementById('form-message').textContent = 'Semua kolom harus diisi.';
        document.getElementById('form-message').style.color = 'red';
    }
});
