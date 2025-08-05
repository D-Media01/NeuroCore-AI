const menuAlone = document.querySelector(".menu-alone");
const navMobileHide = document.querySelector(".nav-mobile-hide");
const body = document.querySelector(".body")

// Show the mobile nav and hide the menu icon
menuAlone.addEventListener("click", (event) => {
    event.stopPropagation();
    navMobileHide.style.display = "block";
    menuAlone.style.display = "none";
});

// Close nav on any body click
document.body.addEventListener("click", () => {
    navMobileHide.style.display = "none";
    menuAlone.style.display = "block";
});

// Prevent click inside nav from closing it
navMobileHide.addEventListener("click", (event) => {
    event.stopPropagation();
});

// Close nav when body is scrolled
body.addEventListener("scroll", () => {
    if (navMobileHide.style.display === "block") {
        navMobileHide.style.display = "none";
        menuAlone.style.display = "block";
    }
});

