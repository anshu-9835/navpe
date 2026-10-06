document.addEventListener("DOMContentLoaded", function () {

    /* MOBILE MENU */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("show");

            if (navLinks.classList.contains("show")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }
        });

    }


    /* CLOSE MOBILE MENU AFTER CLICK */

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            if (navLinks) {
                navLinks.classList.remove("show");
            }

            if (menuToggle) {
                menuToggle.textContent = "☰";
            }

        });

    });


    /* CONTACT FORM */

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (formMessage) {
                formMessage.textContent =
                    "✓ Thank you! Your message has been submitted.";
            }

            contactForm.reset();

        });

    }


    /* LOGIN FORM */

    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (loginMessage) {
                loginMessage.textContent =
                    "✓ Demo login successful. Backend authentication is not connected yet.";
            }

        });

    }


    /* REGISTER FORM */

    const registerForm = document.getElementById("registerForm");
    const registerMessage = document.getElementById("registerMessage");

    if (registerForm) {

        registerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const password =
                document.getElementById("registerPassword").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {

                registerMessage.style.color = "#e63946";

                registerMessage.textContent =
                    "Passwords do not match.";

                return;
            }

            registerMessage.style.color = "#00a98c";

            registerMessage.textContent =
                "✓ Account created successfully in demo mode.";

            registerForm.reset();

        });

    }


    /* SCROLL REVEAL */

    const revealElements = document.querySelectorAll(
        ".service-card, .feature, .solution-box, .about-image, .contact-form"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });

});