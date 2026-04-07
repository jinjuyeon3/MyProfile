document.addEventListener("DOMContentLoaded",()=>{
    /* =========================
       1. 스크롤 애니메이션
    ========================= */
    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-show');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });

    elements.forEach(el => observer.observe(el));


})