function sendMail() {
    emailjs.sendForm('service_aokww4f', 'template_tx11two', '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}