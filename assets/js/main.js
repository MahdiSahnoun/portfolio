

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });


  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });


})();
function checkAnswers() {
  var questions = document.getElementsByClassName('question');
  let correctionHTML="";
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    var selectedOption = questions[i].querySelector('input[type="radio"]:checked');
    if (selectedOption && selectedOption.value === "1") {
      score++;
      correctionHTML += `<p>Question ${i + 1}: ✔️ (Correct)</p>`;
    } else {
      correctionHTML += `<p>Question ${i + 1}: ❌ (Incorrect)</p>`;
    }
  }
  var resultQuiz = document.getElementById('result');
  resultQuiz.textContent = `Vous avez obtenu ${score} sur ${questions.length} !`;
  resultQuiz.innerHTML += "<h3 style=\"color:white\">Correction du Quiz:</h3>" + correctionHTML;
}
/*emailJs*/
function sendMail(){
  let params={
    name:document.getElementById('name').value ,
    name:document.getElementById('email').value ,
    name:document.getElementById('subject').value ,
    name:document.getElementById('message').value ,

  }
  emailjs.send('service_kxsvrfe','template_cr0of4j',params).then(alert('email envoyez'))
}