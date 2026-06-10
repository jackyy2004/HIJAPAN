document.addEventListener('DOMContentLoaded', () => {
    // Inject Bootstrap Icons if not present
    if (!document.querySelector('link[href*="bootstrap-icons"]')) {
        const iconLink = document.createElement('link');
        iconLink.rel = 'stylesheet';
        iconLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css';
        document.head.appendChild(iconLink);
    }

    // Handle premium tabs
    const tabs = document.querySelectorAll('.premium-tab');
    const tabContents = document.querySelectorAll('.tab-content-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');

            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and target content
            tab.classList.add('active');
            const targetElement = document.getElementById(target);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });
});
