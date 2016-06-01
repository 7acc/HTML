$(document).ready(function () {
    console.log("ready!");


    var content1 = document.getElementById("about the island1").innerHTML;
    var content2 = document.getElementById("about the island2").innerHTML;
    $("#c1").html(content1);
    $("#c2").html(content2);

    console.log("hmmm");
    $(".radio input[type='radio']").on('click', function () {
        if ($("#test1").is(":checked")) {
            var content1 = document.getElementById("about the island1").innerHTML;
            var content2 = document.getElementById("about the island2").innerHTML;
            $("#c1").html(content1);
            $("#c2").html(content2);
        } else if ($("#test2").is(":checked")) {
            var content1 = document.getElementById("about the culture1").innerHTML;
            var content2 = document.getElementById("about the culture2").innerHTML;
            $("#c1").html(content1);
            $("#c2").html(content2);
        }
        else if ($("#test3").is(":checked")) {
            var content1 = document.getElementById("about the weather1").innerHTML;
            var content2 = document.getElementById("about the weather2").innerHTML;
            $("#c1").html(content1);
            $("#c2").html(content2);
        }
    })
});