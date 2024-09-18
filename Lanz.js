    // Link mappings for the iframes with the provided image URLs
    const linkMappings = {
        1: 'https://mcpedl.org/uploads_files/30-11-2021/minecraft-1-18-0.apk',
        2: 'https://cdn.imgchest.com/files/j7kzczjjwr7.jpg',
        3: 'https://cdn.imgchest.com/files/my2pcjggdb7.jpg'
    };

    // Function to load iframe based on the stored linkId
    function loadIframeContent() {
        const linkId = localStorage.getItem("downloadLinkId");  // Retrieve the stored link ID
        const iframeContainer = document.getElementById('iframeContainer');

        if (linkMappings[linkId]) {
            // Clear any previous iframe
            iframeContainer.innerHTML = '';

            // Create and insert the iframe
            const iframe = document.createElement('iframe');
            iframe.src = linkMappings[linkId];
            iframe.width = "0";
            iframe.height = "0";
            iframeContainer.appendChild(iframe);

            // Optional: Clear the stored link ID after loading
            localStorage.removeItem("downloadLinkId");
        } else {
            iframeContainer.innerHTML = 'Invalid or missing link ID.';
        }
    }

    // Call the function to load content when the page loads
    document.addEventListener("DOMContentLoaded", loadIframeContent);
