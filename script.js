function sendMail() {
    emailjs.sendForm('service_aokww4f', 'template_k5cslp8', '#myForm')
    .then(function() {
      console.log('SUCCESS!')
  }, function(error) {
      console.log('FAILED...', error)
  });
    }