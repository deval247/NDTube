function playVideo(videoId) {
  window.scrollTo(0,0);
  document.getElementById("video-display").innerHTML = '  <iframe  id="video-iframe" width="860" height="515" src="https://www.youtube.com/embed/Vpzr2hD4jkI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  var iframe = document.getElementById("video-iframe");
  iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
  iframe.src.play()
}


function playVideo2(videoUrl) {
  window.scrollTo(0,0);
  document.getElementById("video-display").innerHTML = '<iframe id="videoFrame" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>';
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "video/" + videoUrl + "?autoplay=1" ;
  
  }

 