$(document).ready(function(){


    $("#date_provider").datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        todayHighlight: true
    });


    $("#addtask").click(function(){
        $("#addtaskModal").modal();
    });


    $("td[data-edtname]").click(function(){

        if ($(this).next().children().is("del")) {
            $(this).next("td").children("del").contents().unwrap();
            $(this).closest("tr").removeClass("task-complete");
            $(this).children("span").removeClass("fa-check-square");
            $(this).children("span").addClass("fa-square");
            $(this).closest("tr").find("#Value").val("False");
        }
        else {
            $(this).next("td").wrapInner('<del class="wrap"></del>');
            $(this).closest("tr").addClass("task-complete");
            $(this).children("span").removeClass("fa-square");
            $(this).children("span").addClass("fa-check-square");
            $(this).closest("tr").find("#Value").val("True");
        }
        $(this).closest("tr").find("#Selector").val("edt");
//        $(this).closest("tr").find("form").submit();

    });


    $("td[data-delname]").click(function(){
        $("#dltcnfModal").modal();
        var rowid = $(this).closest("tr").attr("id");
        $("#dltcnf").attr("data-delid", rowid);
//        $(this).closest("tr").remove();
//        $(this).closest("tr").find("#Selector").val("del");
    });


    $("#dltcnf").click(function(){
        var delid = "#" + $(this).attr("data-delid");
        $(delid).remove();
//        $(this).closest("tr").find("#Selector").val("del");
    });


});