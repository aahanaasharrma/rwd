document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    const namePattern = /^[a-zA-Z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    if (!namePattern.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'First Name should contain only letters.';
        isValid = false;
    }

    if (!namePattern.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Last Name should contain only letters.';
        isValid = false;
    }

    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (isValid) {
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Date of Birth:', dob);
        console.log('Gender:', gender);

        alert('Form submitted successfully!');

        document.getElementById('userForm').reset();
    }
});
