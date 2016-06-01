
// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");

    draw();
});

function draw() {
    //javascript
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.fillRect(65, 10, 10, 100);
    ctx.fillRect(100, 10, 10, 100);
    ctx.fillRect(60,55 , 60, 5);
    // Jquery
    var jQuerCanvas = $('mycanvas').getContext('2d').fillRect(10, 10, 280, 80);
}
function drawSomething() {
    var canvas = Document.getElementById('mycanvas')
}