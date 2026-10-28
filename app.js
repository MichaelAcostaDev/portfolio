"use strict";
(() => {
    'use strict';
    const sections = document.querySelectorAll('[data-active-section]');
    const navigationLinks = new Map();
    document.querySelectorAll('[data-nav]').forEach((link) => {
        if (link.dataset.nav)
            navigationLinks.set(link.dataset.nav, link);
    });
    const year = document.querySelector('[data-current-year]');
    if (year)
        year.textContent = String(new Date().getFullYear());
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealTargets = document.querySelectorAll('[data-reveal]');
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        document.body.classList.add('has-js-reveal');
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
        revealTargets.forEach((target) => revealObserver.observe(target));
    }
    else {
        revealTargets.forEach((target) => target.classList.add('is-visible'));
    }
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting)
                    return;
                navigationLinks.forEach((link, id) => {
                    if (id === entry.target.id)
                        link.setAttribute('aria-current', 'location');
                    else
                        link.removeAttribute('aria-current');
                });
            });
        }, { rootMargin: '-30% 0px -60% 0px' });
        sections.forEach((section) => sectionObserver.observe(section));
    }
})();
