gsap.registerPlugin(ScrollTrigger);
// Overlay animation
gsap.to('.overlay', {
    duration: 2,
    opacity: 0,
    delay: 1,
    ease: 'power2.out',
    onComplete: function() {
      document.querySelector('.overlay').style.display = 'none';
    }
  });
  
  // Scroll animations
  gsap.from('.fade-in', {
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.fade-in',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
  
  gsap.from('.slide-in', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.slide-in',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });