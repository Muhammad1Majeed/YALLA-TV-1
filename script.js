$(document).ready(function() {
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
            stretching: "exactfit",
            fullscreen: true
        });
    }

    const videoUrl = $(".video-btn.selected").data("url");
    const videoKey = $(".video-btn.selected").data("video-key");
    initializePlayer(videoUrl, videoKey);

    $(".video-btn").on("click", function() {
        $(".video-btn").removeClass("selected");
        $(this).addClass("selected");
        const videoUrl = $(this).data("url");
        const videoKey = $(this).data("video-key");
        initializePlayer(videoUrl, videoKey);
    });
});