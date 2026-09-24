function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelector(".nav-links").classList.remove("active");

    });

});