document.addEventListener("DOMContentLoaded", () => {
    
    
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", () => {
     
        navLinks.classList.toggle("active");
        burgerMenu.classList.toggle("active");
    });

   
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            burgerMenu.classList.remove("active");
        });
    });

    
    
   
    const sectionsToFade = document.querySelectorAll(".fade-in");

    
    const observerOptions = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1 
    };

   
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
           
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
               
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

   
    sectionsToFade.forEach(section => {
        observer.observe(section);
    });

    
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute("id");
            }
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });

});
