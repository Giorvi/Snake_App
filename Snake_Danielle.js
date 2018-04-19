
var currentDivPosition = myDiv.offset(),
    myDivWidth = myDiv.width(),
    myDivHeight = myDiv.height(),
            var myDiv = $('<div>'),
    finalDivPositionTop, finalDivPositionLeft;

myDiv.attr({ id: 'myDivId', class: 'myDivClass' }); // already defined with position: absolute is CSS file.

// Set new position     
finalDivPositionTop = currentDivPosition.top + Math.floor( Math.random() * 100 );
finalDivPositionLeft = currentDivPosition.left + Math.floor( Math.random() * 100 );

myDiv.css({ // Set div position
  top: finalDivPositionTop,
  left: finalDivPositionLeft
});

$('body').append(myDiv);

myDiv.text('My position is: ' + finalDivPositionTop + ', ' + finalDivPositionLeft); 

myDiv.fadeIn(500);

setTimeout(function(){

  myDiv.fadeOut(500);

  myDiv.remove();       

}, 3000);