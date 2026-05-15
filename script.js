// 1. إعدادات مكتبة Particles.js (خلفية شبكة البيانات)
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,
        "density": { "enable": true, "value_area": 800 }
      },
      "color": { "value": "#64ffda" }, // لون النقط
      "shape": { "type": "circle" },
      "opacity": {
        "value": 0.4,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#64ffda", // لون الخطوط
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2, // سرعة الحركة
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" }, // التأثير لما تقف بالماوس
        "onclick": { "enable": true, "mode": "push" },
        "resize": true
      },
      "modes": {
        "grab": { "distance": 140, "line_linked": { "opacity": 0.8 } },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
});

// 2. أنيميشن الـ Scroll (Fade In Elements)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // العنصر يظهر لما 15% منه يدخل الشاشة
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // عشان الأنيميشن يشتغل مرة واحدة بس
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 3. تأثير شريط التنقل (تغيير الخلفية عند السكرول)
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
    } else {
        nav.style.boxShadow = 'none';
    }
});