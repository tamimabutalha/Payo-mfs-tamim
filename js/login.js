// document.getElementById('button-login').addEventListener('click', function (event) {
//     event.preventDefault();  // Prevents the form from being submitted

//       // Logs the button click

//     // Step 3: Get the phone number input value correctly
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);  // Logs the actual phone number
// });

document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber);
    


})
