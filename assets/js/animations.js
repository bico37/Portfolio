document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particle-bg", {
    particles: {
      number: { value: 80 },
      size: { value: 3 },
      move: { speed: 2 },
      line_linked: { enable: true },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }, // Partikel sollen auf Hover reagieren
      },
    },
  });
});

gsap.registerPlugin(ScrollTrigger);

// gsap.to("#hero-section", {
//     background: "linear-gradient(120deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)",
//     backgroundSize: "400% 400%",
//     duration: 10,
//     ease: "none",
//     repeat: -1,
//     yoyo: true,
//   });
gsap.from("#hero-section", {
  opacity: 0,
  y: -100, // Einfliegen von oben
  duration: 2,
  ease: "power2.out",
});

// Animation des Textes
gsap.from("#hero-text-content p", {
  opacity: 0,
  y: 50, // Einfliegen von unten
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
  delay: 0.5,
});

gsap.from("#hero-text-content h1", {
  opacity: 0,
  y: 50, // Einfliegen von unten
  duration: 1.5,
  ease: "power2.out",
  delay: 0.5,
});

// Typing Animation für den span mit der Klasse 'txt-rotate'
gsap.from(".txt-rotate", {
  opacity: 0,
  x: -50, // Einfliegen von links
  duration: 1.5,
  ease: "power2.out",
  delay: 1,
});

// Buttons animieren
gsap.from("#hero-btns", {
  opacity: 0, // Startwert: unsichtbar
  y: 30, // Startwert: etwas nach unten verschoben
  stagger: 0.3, // Für nacheinander einfliegende Buttons
  duration: 1.5, // Dauer der Animation
  ease: "power2.out", // Sanfte Bewegung
  delay: 1.5, // Verzögerung für den Beginn der Button-Animation
});

// Hintergrundpartikel (aus der Seite einfliegen)
// gsap.from("#particle-bg", {
//   opacity: 0,
//   x: -200, // Einfliegen von der linken Seite
//   duration: 2,
//   ease: "power2.out",
//   delay: 1,
// });

// Über mich: Bild von links und Text von rechts einfliegen lassen
gsap.from("#aboutMe-img", {
  x: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#section-aboutMe",
    start: "top 60%",
  },
});

gsap.from("#aboutMe-infos", {
  x: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#section-aboutMe",
    start: "top 60%",
  },
});

// Was ich mache: Sektionen nacheinander mit Scale-Effekt einblenden
gsap.utils.toArray(".whatIDo-box").forEach((box, i) => {
  gsap.from(box, {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: box,
      start: "top 70%",
    },
  });
});

// Key Skills: Bilder mit Stagger-Animation
gsap.from(".keySkill img", {
  opacity: 0,
  y: 30,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#skills-container",
    start: "top 60%",
  },
});

// Additional Skills: Ein Fade-In mit leichtem Rotations-Effekt
gsap.from(".skill img", {
  opacity: 0,
  rotation: -15,
  y: 50,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#skills-container",
    start: "top 40%",
  },
});

// Footer: Smooth Fade-In
gsap.from("footer", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "footer",
    start: "top bottom",
  },
});
