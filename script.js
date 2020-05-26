$(document).ready(function () {
  // console.log("JQ is set up properly");

  var myVideo1 = document.getElementById("video1");
  var myVideo2 = document.getElementById("video2");
  var myVideo3 = document.getElementById("video3");

  function playPause() {
    if (myVideo1.paused) myVideo1.play();
    else myVideo1.pause();
  }

  function makeBig() {
    myVideo1.width = 560;
  }

  function makeSmall() {
    myVideo1.width = 320;
  }

  function makeNormal() {
    myVideo1.width = 420;
  }
});
