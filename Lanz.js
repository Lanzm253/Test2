    // Link mappings for the iframes with the provided image URLs
    const linkMappings = {
        1: 'https://mcpedl.org/uploads_files/09-07-2024/minecraft-1-21-2.apk',
        2: 'https://cdn.imgchest.com/files/j7kzczjjwr7.jpg',
        3: 'https://cdn.imgchest.com/files/my2pcjggdb7.jpg'
    };

    // Function to create the iframe container and load content based on the stored linkId
    function createAndLoadIframe() {
        const linkId = localStorage.getItem("downloadLinkId");  // Retrieve the stored link ID

        // Check if the linkId is valid and map to the correct URL
        if (linkMappings[linkId]) {
            // Create and configure the iframe container div
            const iframeContainer = document.createElement('div');
            iframeContainer.id = 'iframeContainer';
            iframeContainer.style.display = 'none';  // Hide the container

            // Create and configure the iframe
            const iframe = document.createElement('iframe');
            iframe.src = linkMappings[linkId];
            iframe.width = "100%";
            iframe.height = "600px";
            iframe.style.display = 'none';  // Hide the iframe

            // Append the iframe to the container
            iframeContainer.appendChild(iframe);

            // Append the container to the body or another parent element
            document.body.appendChild(iframeContainer);

            // Clear the stored link ID after loading
            localStorage.removeItem("downloadLinkId");
        } else {
            // Handle the case where the link ID is invalid or missing
            console.error('Invalid or missing link ID.');
        }
    }

    // Call the function to create and load iframe content when the page loads
    document.addEventListener("DOMContentLoaded", createAndLoadIframe);
