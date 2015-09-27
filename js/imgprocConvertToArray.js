var imgprocConvertToArray = {

  convert: function(imgData) {
    if(imgData) {
      var outputArray = [];
      var data = imgData.data;
      for(var i = 0; i < data.length / 4; i++) {
        var colorMix = Math.round((data[4 * i] + data[4 * i + 1] + data[4 * i + 2]) / 3);
        if(colorMix < 30) outputArray.push("hit");
        else outputArray.push("miss");
      }
      return outputArray;
    }
    return null

  }

}
