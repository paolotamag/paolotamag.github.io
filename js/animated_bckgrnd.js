var set_imgDuration = 3000*4
var imgArray = [
'slides/random_26.png',
'slides/random_27.png',
'slides/random_28.png',
'slides/random_29.png',
'slides/random_30.png',
'slides/random_31.png',
'slides/random_32.png',
'slides/random_33.png',
'slides/random_34.png',
'slides/random_35.png',
'slides/random_36.png',
'slides/random_37.png',
'slides/random_38.png',
'slides/random_39.png',
'slides/random_40.png',
'slides/random_41.png',
'slides/random_42.png',
'slides/random_43.png',
'slides/random_44.png',
'slides/random_45.png'],
    curIndex = 0;
    imgDuration = set_imgDuration;


var imgArray2 = [
'slides/random_26.png',
'slides/random_27.png',
'slides/random_28.png',
'slides/random_29.png',
'slides/random_30.png',
'slides/random_31.png',
'slides/random_32.png',
'slides/random_33.png',
'slides/random_34.png',
'slides/random_35.png',
'slides/random_36.png',
'slides/random_37.png',
'slides/random_38.png',
'slides/random_39.png',
'slides/random_40.png',
'slides/random_41.png',
'slides/random_42.png',
'slides/random_43.png',
'slides/random_44.png',
'slides/random_45.png'],
    curIndex2 = 1;
    imgDuration2 = set_imgDuration;
function start(){ 
  slideShow();
  slideShow_two();}

  function slideShow() {
      document.getElementById('slider').className += "fadeOut";

      setTimeout(function() {
          document.getElementById('slider').src = imgArray[curIndex];
          document.getElementById('slider').className = "";
      },1000*4);
      curIndex++;
      if (curIndex == imgArray.length) { curIndex = 0; }
      setTimeout(slideShow, imgDuration);
  }

  function slideShow_two() {

      setTimeout(function() {
          document.getElementById('slider_two').src = imgArray2[curIndex2];
      },2000*4);
      curIndex2++;
      if (curIndex2 == imgArray2.length) { curIndex2 = 0; }
      setTimeout(slideShow_two, imgDuration2);
  }
