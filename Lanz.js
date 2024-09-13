(function() {
    const allowedHost = 'pidclanzwebsite.blogspot.com'; // Replace with your domain

    // Check if the current host is the allowed one
    if (window.location.hostname !== allowedHost) {
        console.error('This script is only allowed on the authorized domain.');
        return; // Prevent further execution if not on the allowed domain
    }

    document.addEventListener('DOMContentLoaded', function() {
        const redirectButton = document.getElementById('redirectButton');

        // Define the link mappings
        const linkMappings = {
            1: 'https://mez.ink/pidcheas',
            2: 'https://mez.ink/clark',
            3: 'https://mez.ink/HeytaekabaHAHAHAHAH',
            4: 'https://boombastiksideeye.com',
            5: 'https://mez.ink/Minecraft'
        };

        redirectButton.addEventListener('click', function() {
            const linkId = this.getAttribute('data-link-id');
            const url = linkMappings[linkId];
            if (url) {
                window.location.href = url; // Redirect to the URL
            } else {
                console.error('No URL found for link ID:', linkId);
            }
        });
    });
})();
