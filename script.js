// Contact Form

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {

            formMessage.textContent = "Please fill all the fields.";
            formMessage.style.color = "red";

        } else {

            formMessage.textContent =
                "Thank you, " + name + "! Your message has been received.";

            formMessage.style.color = "#138808";

            contactForm.reset();
        }

    });

}


// Back To Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});


// Navbar Scroll Effect

window.addEventListener("scroll", function() {

    const nav = document.querySelector("nav");

    if (nav) {

        if (window.scrollY > 50) {
            nav.style.background = "rgba(0,0,0,0.95)";
        } else {
            nav.style.background = "#111";
        }

    }

});


// Page Loading Effect

window.addEventListener("load", function() {

    document.body.classList.add("loaded");

});
