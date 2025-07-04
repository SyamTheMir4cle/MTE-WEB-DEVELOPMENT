document.addEventListener("DOMContentLoaded", function() {

    // Scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.custom-card, .timeline > li').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

});

document.addEventListener("DOMContentLoaded", function() {

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    };

    const timelineObserver = new IntersectionObserver(animateOnScroll, {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    });

    const timelineItems = document.querySelectorAll('.timeline > li');
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

});
