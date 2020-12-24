window.addEventListener("load", function() {
  var body = document.getElementsByTagName('body')[0];
  if(body.offsetWidth > 1199) {
    var container = document.getElementById('videoContainer');
    container.innerHTML = "";
    var video = document.createElement("video");
    video.setAttribute("poster", "images/content/enter/poster.jpg");
    video.setAttribute("muted", "muted");
    video.setAttribute("autoplay", "autoplay");
    video.setAttribute("loop", "loop");
    var source_1 = document.createElement("source");
    source_1.type = "video/mp4";
    source_1.src = "https://profildoors.center/video/sibir_2019.mp4";
    var source_2 = document.createElement("source");
    source_2.type = "video/webm";
    source_2.src = "https://profildoors.center/video/sibir_2019.webm";
    video.appendChild(source_1);
    video.appendChild(source_2);
    container.appendChild(video);
    video.muted = "true";
    video.play();
  }
});
