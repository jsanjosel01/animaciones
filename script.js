
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

    // Titulos h2
    gsap.from("#ediciones h2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        
        scrollTrigger: {
            trigger: "#ediciones", 
            start: "top 80%",   
  
            toggleActions: "play none none none" //solo se ejecuta 1 vez.
            
        }
    });


    // Galería 
    gsap.from(".columna-imagenes img", {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1,
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#galeria-interactiva",
            start: "top 75%",               
            toggleActions: "play none none none"
        }
    });

    gsap.from(".columna-texto h2, .columna-texto p, .columna-texto .boton-galeria", {
        opacity: 0,
        x: 50, 
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".columna-texto",
            start: "top 75%",
            toggleActions: "play none none none"
        }
    });

    // CTA, Ícono/Logo 
    gsap.from("#iconologo img", {
        opacity: 0,
        scale: 0.5,
        rotation: 45,
        duration: 1.2,
        ease: "back.out(1.7)", // Efecto de rebote 
        scrollTrigger: {
            trigger: "#iconologo",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });

});
