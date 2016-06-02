$(document).ready(function () {
    console.log("ready!");

    draw();
});

function draw() {
    
    var canvas = document.getElementById('fishtank');
    var ctx = canvas.getContext('2d');
    
    gradient = ctx.createLinearGradient(146.000, 0.000, 154.000, 300.000);

    
    gradient.addColorStop(0.002, 'rgba(4, 249, 245, 1.000)');
    gradient.addColorStop(0.500, 'rgba(82, 0, 224, 1.000)');

   
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
   ctx.strokeRect(0, 0, canvas.width, canvas.height)
    
  
}
