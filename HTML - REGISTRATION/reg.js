document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
          
        const phoneNumber = document.getElementById('phone-number').value;
        const phonePattern = /^\d{10}$/;

        if (!phonePattern.test(phoneNumber)) {
            alert('Phone number must be exactly 10 digits.');
            return;

        }
        // if (phoneNumber <=10){
        //     alert("phone number must be 10 digits.");
        // }
       
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

        if (!passwordPattern.test(password)) {
            alert('Password must be at least 12 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        alert('Registration successful!');
        // You can submit the form here if validation is successful
        // form.submit();
    });
});

