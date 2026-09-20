(function () {
    const offcanvasEl = document.getElementById('mobileNav');
    if (!offcanvasEl) return;

    offcanvasEl.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);

            function scrollAfterClose() {
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }

            if (offcanvasInstance) {
                offcanvasEl.addEventListener('hidden.bs.offcanvas', scrollAfterClose, { once: true });
                offcanvasInstance.hide();
            } else {
                scrollAfterClose();
            }
        });
    });
})();