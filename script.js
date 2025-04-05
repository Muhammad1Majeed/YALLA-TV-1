
// JavaScript for video player setup
$(document).ready(function() {
    // Function to initialize the video player
    function initializePlayer(videoUrl, videoKey) {
        jwplayer("jwplayer-container").setup({
            file: videoUrl,
            width: "100%",
            height: "100%",
            aspectratio: "16:9",
            controls: true,
            autostart: true,
            drm: {
                clearkey: {
                    keyId: videoKey.split(":")[0],
                    key: videoKey.split(":")[1]
                }
            },
            stretching: "exactfit", // Fullscreen setting
            fullscreen: true
        });
    }

    // Initialize the player with default button selection
    const videoUrl = $(".video-btn.selected").data("url");
    const videoKey = $(".video-btn.selected").data("video-key");
    initializePlayer(videoUrl, videoKey);

    // Event listener to change video on button click
    $(".video-btn").on("click", function() {
        $(".video-btn").removeClass("selected");
        $(this).addClass("selected");
        const videoUrl = $(this).data("url");
        const videoKey = $(this).data("video-key");
        initializePlayer(videoUrl, videoKey);
    });
});
