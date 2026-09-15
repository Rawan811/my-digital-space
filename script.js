/* =========================
   REPEATING SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-card"
);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            } else {

                entry.target.classList.remove("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section[id]");


const sectionObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                });


                const activeLink =
                    document.querySelector(
                        `.nav-link[href="#${entry.target.id}"]`
                    );


                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    },

    {
        threshold: 0.35
    }

);


sections.forEach((section) => {

    sectionObserver.observe(section);

});