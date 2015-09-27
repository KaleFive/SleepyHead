$(document).ready(function() {
  var playingBlankSpace = false;
  $(document).keypress(function(e) {
    var tSwiftBlankSpace = document.getElementById('tSwiftBlankSpace');
    if(e.which == 13) {
      if(!playingBlankSpace) {
        tSwiftBlankSpace.play();
        playingBlankSpace = true;
      } else {
        tSwiftBlankSpace.pause();
        playingBlankSpace = false;
      };
    };
  });
  var playingStyle = false;
  $(document).keypress(function(e) {
    var tSwiftStyle = document.getElementById('tSwiftStyle');
    if(e.which == 97) {
      if(!playingStyle) {
        tSwiftStyle.play();
        playingStyle = true;
      } else {
        tSwiftStyle.pause();
        playingStyle = false;
      };
    };
  });
  $(document).keypress(function(e) {
    var scratch = document.getElementById('scratch');
    if(e.which == 98) {
      scratch.play();
      // tSwiftStyle.pause();
      // setTimeout(function() {
      // 	tSwiftStyle.play();
      // }, 700)
    };
  });
});
