yepnope({
  test: Modernizr.inputtypes.number,
  yep: ['js/nonumberpolyfill.js', 'css/number.css'],
  nope: ['js/numPolyfill.js', 'css/number.css'],
  complete: function () {
    console.log('YepNope + Modernizr are done');
  }
});