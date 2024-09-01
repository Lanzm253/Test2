document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.redirect-link');

    // Define the link mappings
    const linkMappings = {
        1: 'https://mez.ink/pidcheas',
        2: 'https://mez.ink/clark',
        3: 'https://mez.ink/Minecraft'
    };

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const linkId = this.getAttribute('data-link-id');
            const url = linkMappings[linkId];
            if (url) {
                window.location.href = url; // Redirect to the URL
            } else {
                console.error('No URL found for link ID:', linkId);
            }
        });
    });
});
