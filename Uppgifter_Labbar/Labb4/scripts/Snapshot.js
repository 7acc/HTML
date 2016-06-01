$(document).ready(function () {
    alert('hej')
    $('snapshot1').on('click', snap1);
    $('snapshot2').on('click', snap2);
});

function snap1() {
    var canvas = document.getElementById('mycanvas1')
    var iframe = document.getElementById('myvideo1')
    var video = (iframe.contentDocument)
    canvas.getContext('2d').drawImage(video, 0, 0, 400, 320)
}
function snap2() {
    var canvas = document.getElementById('mycanvas2')
    var video = document.getElementById('myvideo2')
    canvas.getContext('2d').drawImage(video, 0, 0, 350, 300)
}