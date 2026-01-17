function SendEmail(){
    // Stops the page from refreshing
    event.preventDefault();

    // If the code reaches this point, it means all 'required' fields are filled
    alert("Form submitted successfully!");

    // Optional: This clears the form after the alert is closed
    event.target.reset();

}