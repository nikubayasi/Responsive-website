// script.js
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav ul li a');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

  // スムーズスクロール用のイベントリスナー
  for (const link of links) {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          window.scrollTo({
              top: targetElement.offsetTop - 60,
              behavior: 'smooth'
          });
      });
  }
}

  // カルーセルの次のスライドを表示
  function showNextSlide() {
      carouselItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[currentIndex].classList.add('active');
      updateCarousel();
  }

  // カルーセルの前のスライドを表示
  function showPrevSlide() {
      carouselItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      carouselItems[currentIndex].classList.add('active');
      updateCarousel();
  }

  // カルーセルを更新
  function updateCarousel() {
      const offset = -currentIndex * 100;
      document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
  }

  // イベントリスナーを設定
  nextBtn.addEventListener('click', showNextSlide);
  prevBtn.addEventListener('click', showPrevSlide);

