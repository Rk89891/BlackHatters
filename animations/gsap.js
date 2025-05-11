// GSAP Animations
gsap.from(".nav-link", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.2,
  });
  
  gsap.from(".reveal-on-scroll > div", {
    scrollTrigger: {
      trigger: ".reveal-on-scroll",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  });
  
  // Typewriter Effect
  new TypeIt("#typing-effect", {
    strings: ["Cybersecurity Notes.", "Exploits. Payloads. Power."],
    speed: 60,
    breakLines: false,
    loop: true
  }).go();
