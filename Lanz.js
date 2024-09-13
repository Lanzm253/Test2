(function() {
    const allowedHost = 'hdwallpaper56789.blogspot.com'; // Replace with your domain

    // Check if the current host is the allowed one
    if (window.location.hostname !== allowedHost) {
        console.error('This script is only allowed on the authorized domain.');
        return; // Prevent further execution if not on the allowed domain
    }

    // Define link mappings
    const linkMappings = {
        6: 'https://cdn.imgchest.com/files/my2pcjggdb7.jpg', // Example URL
        1: 'https://mez.ink/pidcheas',
        2: 'https://mez.ink/clark',
        3: 'https://mez.ink/HeytaekabaHAHAHAHAH',
        4: 'https://boombastiksideeye.com',
        5: 'https://mez.ink/Minecraft'
        };
    document.addEventListener('DOMContentLoaded', function() {
        // Update the linkMappings if needed, or other initialization tasks
        console.log("External JS loaded and running.");

        // You might need additional logic here, if necessary
    });

    // Provide a global function to access link mappings, if needed
    window.getDownloadUrl = function(linkId) {
        return linkMappings[linkId] || null;
    };
})();
