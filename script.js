function initMap() {
  // Your location coordinates
  const myLocation = { lat: 9.8489, lng: 78.0880 };

  // Initialize map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLocation,
  });

  // Custom marker
  new google.maps.Marker({
    position: myLocation,
    map: map,
    icon: "location.png", // your custom image
    title: "Abhinav Agency"
  });
}
// Select all anchor links with hashes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default jump

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      // Scroll smoothly to the target
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // aligns section to the top
      });
    }
  });
});
const navbarHeight = document.querySelector('.navbar').offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const targetPosition = target.offsetTop - navbarHeight; // offset for navbar
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
// Contact form script
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("workForm");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (firstName === "" || email === "" || message === "") {
      alert("Please fill all required fields.");
      return;
    }

    // Show success message
    successMsg.style.display = "block";

    // Reset form
    form.reset();

    // Hide message after 4 seconds
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 4000);
  });
});
//Preloader Content
const logo = document.querySelector('#preloader img');

  // Listen for the end of the rotation animation
  logo.addEventListener('animationend', function() {
    document.body.classList.add('loaded'); // Show main content
  });
// Stagger animations for child elements
function animateChildren(parentSelector, childSelector) {
  const parent = document.querySelector(parentSelector);
  if(!parent) return;

  const children = parent.querySelectorAll(childSelector);
  children.forEach((child, index) => {
    const childTop = child.getBoundingClientRect().top;
    if(childTop < window.innerHeight * 0.8) {
      setTimeout(() => {
        child.classList.add('visible');
      }, index * 150); // stagger 150ms
    }
  });
}

window.addEventListener('scroll', () => {
  animateChildren('#our-products .products-wrapper', '.product-card');
  animateChildren('.service-container', '.service-box');
});
// Animate sections on scroll
const animatedSections = document.querySelectorAll('.fade-slide');

function animateOnScroll() {
  const triggerPoint = window.innerHeight / 5 * 4; // trigger 80% down the viewport

  animatedSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerPoint){
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // animate visible sections on load
