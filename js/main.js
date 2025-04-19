

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

// Điều khiển modal đăng ký
document.getElementById('openRegisterModal').addEventListener('click', function() {
  document.getElementById('registerModal').classList.add('active');
});

document.getElementById('closeRegisterModal').addEventListener('click', function() {
  document.getElementById('registerModal').classList.remove('active');
});

// Đóng modal khi nhấp ra ngoài nội dung
document.getElementById('registerModal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('active');
  }
});

// Điều khiển modal đăng nhập
document.getElementById('openLoginModal').addEventListener('click', function() {
  document.getElementById('loginModal').classList.add('active');
});

document.getElementById('closeLoginModal').addEventListener('click', function() {
  document.getElementById('loginModal').classList.remove('active');
});

// Đóng modal khi nhấp ra ngoài nội dung
document.getElementById('loginModal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('active');
  }
});
// Điều khiển modal đặt vé
document.querySelectorAll('.about-one_btn.nut').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('bookingModal').classList.add('active');
  });
});

document.getElementById('closeBookingModal').addEventListener('click', function() {
  document.getElementById('bookingModal').classList.remove('active');
});

// Đóng modal khi nhấp ra ngoài nội dung
document.getElementById('bookingModal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('active');
  }
});