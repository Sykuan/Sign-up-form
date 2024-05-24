function validateForm() {
    const password = document.getElementById('password').value;
    const password_confirmation = document.getElementById('password_confirmation').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Clear previous error message
    errorMessage.textContent = '';

    // Example security criteria: minimum 8 characters, at least one letter and one number
    const passwordCriteria = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordCriteria.test(password)) {
        errorMessage.textContent = 'Password must be at least 8 characters long and contain at least one letter and one number.';
        return false;
    }

    if (password !== password_confirmation) {
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    return true;
}