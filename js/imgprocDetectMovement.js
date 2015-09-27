var imgprocDetectMovement = {

  perimeter: function(arrA, arrB) {

    if(arrA && arrB) {
      for(var i = 0; i < arrA.length; i++) {
        if(Math.abs(arrA[i] - arrB[i]) > 0) arrA[i] = 'pink';
      }
    return arrA;
    }
    return null

  }

}
