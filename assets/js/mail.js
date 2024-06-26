emailjs.init("wcadavos@crc.pshs.edu.ph");

function sendMail(contactForm) {
    emailjs.send("PersonalGmail","balloon-pop-maths",{
        from_name: contactForm.name.value,
        from_email: contactForm.email.value,
        message: contactForm.message.value
    })
    .then(
        function(response) {
            // Log to console for debugging //
            // console.log("SUCCESS", response); //
            $("#modal-contact").modal('hide');
            $("#modal-feedback-heading-text").text("Success!");
            $("#modal-feedback-body-text").text("Your contact form was submitted succesfully.");
            $('#modal-feedback').modal();
        },
        function(error) {
            // Log to console for debugging //
            // console.log("FAILED", error); //
            $("#modal-contact").modal('hide');
            $("#modal-feedback-heading-text").text("Oops!");
            $("#modal-feedback-body-text").text("Your contact form was not submitted.");
            $('#modal-feedback').modal();
        }
    );
    return false;  // To block from loading a new page
}
