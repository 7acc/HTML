$(document).ready(function () {
    console.log("ready!");


 

    console.log("hmmm");
    $(".radio input[type='radio']").on('click', function () {
        if ($("#awesome").is(":checked")) {
            var content = document.getElementById("good").innerHTML;
            
            $("#smiley").html(content);
          
        } else if ($("#meh").is(":checked")) {
            var content = document.getElementById("meeh").innerHTML;
            
            $("#smiley").html(content);
            
        }
        else if ($("#terrible").is(":checked")) {
            var content = document.getElementById("bad").innerHTML;
           
            $("#smiley").html(content);
           
        }
    })
});