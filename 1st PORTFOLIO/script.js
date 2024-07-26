// JavaScript for smooth scrolling, navigation, and 3D effects
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
    

    // 3D effect on scroll
    const panels = document.querySelectorAll(".panel");
    window.addEventListener("scroll", () => {
        const scrollY = window.pageYOffset;
        panels.forEach(panel => {
            const offsetTop = panel.offsetTop;
            const offsetHeight = panel.offsetHeight;
            if (scrollY > offsetTop - window.innerHeight && scrollY < offsetTop + offsetHeight) {
                panel.style.transform = `translateZ(${(offsetTop - scrollY) / 2}px)`;
            }
        });
    });

    // Interactive project cards
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("mouseenter", () => {
            project.style.transform = "rotateY(10deg) rotateX(5deg) translateZ(20px)";
        });
        project.addEventListener("mouseleave", () => {
            project.style.transform = "rotateY(0) rotateX(0) translateZ(0)";
        });
    });
});


// JavaScript to show tooltips or modals
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        // Display tooltip or modal with additional info
    });
    skill.addEventListener('mouseleave', () => {
        // Hide tooltip or modal
    });
});


