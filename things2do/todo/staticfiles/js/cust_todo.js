$(document).ready(function(){


    $("#date_provider").datepicker({
        format: "dd-mm-yyyy",
        autoclose: true,
        todayHighlight: true
    });


    $("#addtask").click(function(){
        $("#addtaskModal").modal();
    });


    $("td[data-edtname]").click(function(){

        if ($(this).next().is("del")) {
            $(this).next("del").children("td").unwrap();
            $(this).closest("tr").css("background-color", "#ffffff");
            $(this).children("span").removeClass("fa-check-square-o");
            $(this).children("span").addClass("fa-square-o");
        }
        else {
            $(this).next("td").wrap("<del></del>");
            $(this).closest("tr").css("background-color", "#cccccc");
            $(this).children("span").removeClass("fa-square-o");
            $(this).children("span").addClass("fa-check-square-o");
        }

//        $(this).children(".fa fa-square-o").attr("fa fa-square-o" "fa fa-check-square-o");
//        $(this).children(".writeup").unwrap();
//        $(this).children(".fa fa-check-square-o").attr("fa fa-check-square-o" "fa fa-square-o");
    });


    $("td[data-delname]").click(function(){
        $(this).closest("tr").remove();
    });


});