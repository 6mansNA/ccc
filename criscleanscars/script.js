document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Example: Validate the email field
        const email = document.querySelector('#email').value;
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return false;
        }

        // If all validations pass
        this.submit();

    
    });
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if(menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }
});

document.getElementById('bookNowBtn').onclick = function() {
    document.getElementById('bookNowModal').style.display = "block";
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('bookNowModal').style.display = "none";
}

// Prevent the form from submitting to a server as an example
document.getElementById('bookingForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent actual submission

        name_2 = document.getElementById('name').value,
        phone = document.getElementById('phone').value,
        email = document.getElementById('email').value,
        date = document.getElementById('date').value,
        time = document.getElementById('time').value
    
    emailjs.send("service_mwx7d71","template_4csl2vc",{
        from_name: document.getElementById('name').value,
        message: name_2 + "\n" + phone + "\n" + email + "\n" + date + "\n" + time,
        reply_to: email,
        }).then(
            function(response) {
                //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                alert("You have successfully requested a booking!");
                document.getElementById('bookNowModal').style.display = 'none';
            },
            function(error) {
                //console.log("FAILED", error);
                alert("There was an error requesting your booking.");
            }
        );
    

}