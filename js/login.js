document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();  // Prevents the form from being submitted

    console.log('login button clicked');  // Logs the button click

    // Step 3: Get the phone number input value correctly
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);  // Logs the actual phone number
});
