document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.redirect-link');

    // Define the link mappings
    const linkMappings = {
        1: 'https://mcpedl.org/uploads_files/09-07-2024/minecraft-1-21-2.apk',
        2: 'https://drive.google.com/file/d/1V9ur36BK5BtrgFMg-oKqqj14CXM8XCu7/view?usp=drive_link'
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
