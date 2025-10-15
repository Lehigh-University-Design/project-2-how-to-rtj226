// Start JS script code, feel free to not use this or remove it

console.log("Hello, World!");

document.addEventListener("DOMContentLoaded", () => {
    const animationSection = document.querySelector('.animation');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // add active class when section is visible
          left.classList.add('active');
          right.classList.add('active');
          // optional: only trigger once
          observer.unobserve(animationSection);
        }
      });
    }, { threshold: 0.6 }); // trigger when ~40% of the section is visible
  
    observer.observe(animationSection);
  });
  