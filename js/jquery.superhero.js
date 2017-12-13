(function() {
  'use strict';

  var selector = '.superhero';
  var $target  = $(selector);

  var $overlay = $('<div>').attr('id','sh-overlay');
  $target.prepend($overlay);

  var imgPath           = $target.data('img-path');
  var bgColor           = $target.data('bg-color');
  var bgOpacity         = $target.data('bg-opacity');
  var gradientStart     = $target.data('gradient-start');
  var gradientStop      = $target.data('gradient-stop');
  var gradientDirection = $target.data('gradient-direction');

  var objCss = {};

  if (imgPath) {
    objCss.background     = 'url(' + imgPath + ') center';
    objCss.backgroundSize = 'cover';
  }

  if (bgColor)   { $overlay.css({background: bgColor}); }
  if (bgOpacity) { $overlay.css({opacity:    bgOpacity}); }

  if (gradientStart && gradientStop) {
    if (!gradientDirection) {gradientDirection = 'to right';}
    $overlay.css( {
      background: gradientStart,
      background: '-webkit-linear-gradient(' + gradientDirection + ', ' + gradientStart + ', ' + gradientStop + ')',
      background: 'linear-gradient(' + gradientDirection + ', ' + gradientStart + ', ' + gradientStop + ')'
    });
  }



  $target.css(objCss);

//   data-img-path="/img/hero.jpg"
//   data-bg-color="#000"
//   data-bg-opacity="#000"
// data-gradient-start=""
// data-gradient-stop=""
// data-gradient-direction=""


}());
