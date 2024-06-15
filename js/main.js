

// Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,              // Khoảng cách giữa các slide
    effect: "fade",                 // Hiệu ứng fade cho các chuyển đổi slide
    centeredSlides: true,          // Căn giữa slides
    autoplay: {
      delay: 2500,                  // Độ trễ tự động chuyển slide là 2500ms (2.5 giây)
      disableOnInteraction: false, // Không tắt tự động chạy khi tương tác
    },
    pagination: {
      el: ".swiper-pagination",     // Element cho pagination
      clickable: true,              // Cho phép click vào pagination để chuyển slide
    },
    navigation: {
      nextEl: ".swiper-button-next", // Selector cho nút next
      prevEl: ".swiper-button-prev", // Selector cho nút prev
    },
});


// WOW JS
  new WOW().init();



 
// Header fixed
  document.addEventListener("DOMContentLoaded", function() {
    const topHeader = document.querySelector('.tieude_tren');
    const mainHeader = document.querySelector('.menu_chinh');
    const headerHeight = topHeader.offsetHeight;
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      if (window.scrollY > headerHeight) {
        topHeader.classList.add('hide');
        mainHeader.classList.add('sticky');
      } else {
        topHeader.classList.remove('hide');
        mainHeader.classList.remove('sticky');
      }
      lastScrollY = window.scrollY;
    });
  });

// Header fixed

