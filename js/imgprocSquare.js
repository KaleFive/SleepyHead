var imgprocSquare = {

  bwSquare: {

    square: function(imgDataA, startPoint){
      if(!!imgDataA){
        var offset = startPoint * 4;
        var sideLength = 40; //each side of a square is hardcoded to be 8
        var loopOffset = (640 - sideLength) * 4;
        var height = width = sideLength;
        var totalPixels = height * width;
        var dataA = imgDataA.data;

        var col = []
        var count = 0;
        for(var x = offset; x < dataA.length; x+=4) {
          var r = dataA[x  ];
          var g = dataA[x+1];
          var b = dataA[x+2];
          if((x-offset) % (width*4) === 0) {
            x+= loopOffset;
            count++;
          };
          if(Math.round((r+g+b)/3) > 30) col.push(255);
          else col.push(0);
          if(count === sideLength) break;
        };
        return col;
      }
      return null
    },

    allToImg: function(col, startPoint){

      var ret = new ImageData(640, 320);
      var data = ret.data;

      var offset = startPoint * 4;
      var sideLength = 40; //each side of a square is hardcoded to be 8
      var loopOffset = (640 - sideLength) * 4;
      var height = width = sideLength;
      var totalPixels = height * width;

      if (col){
        var k = offset
        for(var x = 0; x < col.length; x++) {
          data[k + (4 * x)    ] = col[x];
          data[k + (4 * x) + 1] = col[x];
          data[k + (4 * x) + 2] = col[x];
          data[k + (4 * x) + 3] = 255;
          if(x % sideLength === 0) k+= loopOffset;
        }
        return ret;
      }
      return null;
    }

  } //end of bwSquare

};
