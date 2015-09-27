var imgprocBlackScreen = {

  pullImage: function(imgDataA, width, height) {
    if(!!imgDataA) {
      var bwImage = [];
      var dataA = imgDataA.data;
      for(var x = 0; x < dataA.length; x+=4) {
        var r = dataA[x  ];
        var g = dataA[x+1];
        var b = dataA[x+2];
        if(Math.round((r+g+b)/3) > 30) bwImage.push(255)
        else bwImage.push(0);
      }
      return bwImage;
    }
    return null;

  },

  pushImage: function(bwImageData) {
    if(bwImageData){
      var ret = new ImageData(640, 320)
      var data = ret.data;
      for(var x = 0; x < bwImageData.length; x++) {
        var val = bwImageData[x];
        if(!(val === 'pink')) {
          data[4 * x  ] = data[4 * x + 1] = data[4 * x + 2] = val;
        } else {
          data[4 * x  ] = 255;
          data[4 * x + 1] = 110;
          data[4 * x + 2] = 180;;
        };
        data[4 * x + 3] = 255;
      }
      return ret;
    }
    return null;
  }

} //end of blackScreen
