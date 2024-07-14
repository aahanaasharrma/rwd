document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    // Regular expressions for validation
    const namePattern = /^[a-zA-Z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    // Clear previous error messages
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // Validate first name
    if (!namePattern.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'First Name should contain only letters.';
        isValid = false;
    }

    // Validate last name
    if (!namePattern.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Last Name should contain only letters.';
        isValid = false;
    }

    // Validate email
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

        // Clear the form
        document.getElementById('userForm').reset();
    }
});
