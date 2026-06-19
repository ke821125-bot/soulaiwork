/* SOUL — common interactions (header scroll, mobile menu, reveal) */
(function () {
    const header = document.querySelector('header.soul-header');
    if (header && !header.classList.contains('solid')) {
        const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    function toggleMenu(open) {
        if (!hamburgerBtn || !mobileMenu) return;
        hamburgerBtn.classList.toggle('open', open);
        mobileMenu.classList.toggle('open', open);
        document.body.style.overflow = open ? 'hidden' : '';
    }
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            toggleMenu(!mobileMenu.classList.contains('open'));
        });
        mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => toggleMenu(false));
        });
    }

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
                    const idx = Math.max(0, siblings.indexOf(entry.target));
                    setTimeout(() => entry.target.classList.add('visible'), idx * 90);
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach(el => io.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('visible'));
    }

    // Smooth anchor scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const href = a.getAttribute('href');
            if (href.length < 2) return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    window.scrollToSection = function (id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
})();
