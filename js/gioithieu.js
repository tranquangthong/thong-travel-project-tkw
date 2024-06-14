// script.js
document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.custom-progress-bar');
    const windowHeight = window.innerHeight;

    function checkScroll() {
        progressBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const percentage = bar.getAttribute('data-percentage');
            const progressValue = bar.querySelector('.custom-progress-value');
            const percentageSpan = bar.querySelector('.custom-percentage');

            if (barPosition < windowHeight) {
                let start = 0;
                const interval = setInterval(() => {
                    if (start <= percentage) {
                        progressValue.style.width = start + '%';
                        percentageSpan.textContent = start + '%';
                        start++;
                    } else {
                        clearInterval(interval);
                    }
                }, 20); // Tốc độ chạy hiệu ứng
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Kiểm tra ban đầu trong trường hợp các thanh đã ở trong tầm nhìn khi tải trang
});
// Counter-up

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            const increment = target / 200; // Điều chỉnh giá trị này để thay đổi tốc độ đếm
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
        counter.style.animationDelay = '0.5s';
    });
});

// Counter-up
