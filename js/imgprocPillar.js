var imgprocPillar = {

  bwPillar: {

    pillar: function(imgDataA){
      if(!!imgDataA){
        var skip = 16; //value to make the reading into lines instead of the whole space
        var offset = 320 * 4;
        var loopOffset = ((640 - 80) * 4) + (skip * 640 * 4);
        var height = 480;
        var width = 80;
        var totalPixels = height * width;
        var dataA = imgDataA.data;
        // console.log("IMGDATA: ", dataA.length)
        // console.log("DATA A: ", dataA[1280])

        var col = []
        for(var x = offset; x < dataA.length; x+=4) {
          // console.log("DATA A2: ", dataA[1280])
          var r = dataA[x  ];
          var g = dataA[x+1];
          var b = dataA[x+2];
          if((x-offset) % (width*4) === 0) x+= loopOffset;
          if(Math.round((r+g+b)/3) > 30) col.push(255);
          else col.push(0);
        };
        return col;
      }
      return null
    },

    allToImg: function(col){

      var ret = new ImageData(640, 320);
      var data = ret.data;

      var skip = 16; //value to make the reading into lines instead of the whole space
      var offset = 320 * 4;
      var loopOffset = ((640 - 80) * 4) + (skip * 640 * 4);
      var height = 480;
      var width = 80;
      var totalPixels = height * width;

      if (col){
        var k = offset
        for(var x = 0; x < col.length; x++) {
          data[k + (4 * x)    ] = col[x];
          data[k + (4 * x) + 1] = col[x];
          data[k + (4 * x) + 2] = col[x];
          data[k + (4 * x) + 3] = 255;
          if(x % 80 === 0) k+= loopOffset;
        }
        return ret;
      }
      return null;
    },

    diffArr: function(arrOne, arrTwo){
      if(!!arrOne && !!arrTwo){
        var ret = [];
        var length = arrOne.length;
        for(var x = 0; x < length; x++){
          ret.push(Math.abs(arrOne[x]-arrTwo[x]));
        }
        return ret;
        //Not using this, even though it is much less verbose and much more readable, because it is, damnably, also much slower.
        // return deepCollapse(arrOne, arrTwo, function(a,b){
        // 	return Math.abs(a-b);
        // });
      }
    },

    presenceArr: function(arrOne){
      if(!!arrOne){
        var ret = [];
        var length = arrOne.length;
        for(var x = 0; x < length; x++){
          if(arrOne[x] > 50) ret.push(255)
          else ret.push(0);
        }
        return ret;
        //Not using this, even though it is much less verbose and much more readable, because it is, damnably, also much slower.
        // return deepCollapse(arrOne, arrTwo, function(a,b){
        // 	return Math.abs(a-b);
        // });
      }
    },

    mask: function(mask, real, threshold){
      if(!!mask && !!real){
        var ret = [];
        var length = mask.length;
        for(var x = 0; x < length; x++){
            ret.push((mask[x] > threshold) ? real[x] : 0);
        }
        return ret;
        //See note below.
        //return deepCollapse(mask, real, function(a,b){
        //	return (a > threshold) ? b : 0;
        //});
      }
    }

  }, //end of bwPillar

};
