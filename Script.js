function SendEmail(){
    let parms = {
        name: document.getElementById("NameInput").value,
        email: document.getElementById("EmailInput").value,
        subject: document.getElementById("SubjectInput").value,
        message: document.getElementById("Message").value,

    }

    emailjs.send("service_buo2qot","template_55xwlmi",parms).then(alert("Email Sent!"))
}