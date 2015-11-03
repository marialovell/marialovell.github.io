$(function() {
function grid(isWindowResizing) {

    minigrid({
      container: '.cards',
      item: '.card',
      gutter: 0,
      animate: function(el, x, y, index) {
        // set a different delay value for each item to make sure they don't show
        // all in the same time
        var delay = 100 + index * 30;
        var initialDelay = isWindowResizing ? 0 : 500;
        // first lets set the item position without animate it
        Velocity(el, {
          translateX: x + 'px',
          translateY: y + 'px',
          translateZ: 0
        }, {
          duration: 0,
          delay: initialDelay,
          complete: function() {
            // if the window is resizing just set the item position and return
            if (isWindowResizing) {
              return;
            }
            // now we can animate, in this case the opacity and scale
            Velocity(el, {
              opacity: [1, 0],
              scale: [1, 0.9],
            }, {
              duration: 300,
              easing: [0.4,0.2,0.5,1.4],
              delay: delay
            });
          }
        });
      }
     });
  }

  window.addEventListener('resize', function(){
    grid(true);
  });

  grid();

});