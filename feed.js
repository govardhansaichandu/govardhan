function submitFeedback(event) {
    event.preventDefault();
    document.getElementById("fb").style.display = "block";
    document.getElementById("fb").innerHTML = "Thank you for your feedback.... :)))";
    document.getElementById("feedback-form").reset();
}