
// Animaciones gsap
document.addEventListener('DOMContentLoaded', () => {

    gsap.from("#inicio h1", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        delay: 0.5
    });
    
    // Enlaces del menú
    gsap.from("nav li", {
        duration: 0.6,
        opacity: 0,
        y: -10,
        stagger: 0.1,
        delay: 1
    });

    // Img del logo entrando por la izquierda
    gsap.from(".logo img", {
        duration: 1,
        x: -100, 
        opacity: 0, 
        ease: "power3.out",
        delay: 0.2    
    });
});
