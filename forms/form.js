$.ajax({
    method: 'POST',
    url: 'https://formsubmit.co/ajax/govinddeshmukh2001@gmail.com',
    dataType: 'json',
    accepts: 'application/json',
    data: {
        name: "FormSubmit",
        message: "I'm from Devro LABS"
    },
    success: (data) => swal("Thank You!", "Your Message has been sent!", "success"),
    error: (err) => swal("Sorry!", "There is an error. Please resubmit form", "error");
});