document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
  
    function showNextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    slides[currentSlide].classList.add('active');
    setInterval(showNextSlide, 3000);
  });


const toggleSignin = document.getElementById('toggle-signin');
const toggleSignup = document.getElementById('toggle-signup');
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');

toggleSignin.addEventListener('click', () => {
  signinForm.classList.add('active');
  signupForm.classList.remove('active');
  toggleSignin.classList.add('active');
  toggleSignup.classList.remove('active');
});

toggleSignup.addEventListener('click', () => {
  signupForm.classList.add('active');
  signinForm.classList.remove('active');
  toggleSignup.classList.add('active');
  toggleSignin.classList.remove('active');
});
