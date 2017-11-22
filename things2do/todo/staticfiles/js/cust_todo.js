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
        var edtfrm = $(this).closest("tr").find("form");
        if ($(this).closest("tr").find("#Value").val()=="True") {
            $.ajax({
                type: $(edtfrm).attr('method'),
                url: $(edtfrm).attr('action'),
                data: {
                    nIdentifier : $(this).closest("tr").find("#Identifier").val(),
                    nSelector : "edt",
                    nValue : "False",
                    csrfmiddlewaretoken:$("input[name=csrfmiddlewaretoken]").val()
                    },
                success: function (){
                    $("td[data-edtname]").next("td").children("del").contents().unwrap();
                    $("td[data-edtname]").closest("tr").find("#Value").val("False");
                    $("td[data-edtname]").closest("tr").removeClass("task-complete");
                    $("td[data-edtname]").children("span").removeClass("fa-check-square");
                    $("td[data-edtname]").children("span").addClass("fa-square");
                }
            });
        }
        else {
            $.ajax({
                type: $(edtfrm).attr('method'),
                url: $(edtfrm).attr('action'),
                data: {
                    nIdentifier : $(this).closest("tr").find("#Identifier").val(),
                    nSelector : "edt",
                    nValue : "True",
                    csrfmiddlewaretoken:$("input[name=csrfmiddlewaretoken]").val()
                    },
                success: function (){
                    $("td[data-edtname]").next("td").wrapInner('<del class="wrap"></del>');
                    $("td[data-edtname]").closest("tr").find("#Value").val("True");
                    $("td[data-edtname]").closest("tr").addClass("task-complete");
                    $("td[data-edtname]").children("span").removeClass("fa-square");
                    $("td[data-edtname]").children("span").addClass("fa-check-square");
                }
            });
        }
    });


    $("td[data-delname]").click(function(){
        $("#dltcnfModal").modal();
        var rowid = $(this).closest("tr").attr("id");
        $("#dltcnf").attr("data-delid", rowid);
    });


    $("#dltcnf").click(function(){
        var delid = "#" + $(this).attr("data-delid");
        var delfrm = $(delid).find("form");
        $.ajax({
            type: $(delfrm).attr('method'),
            url: $(delfrm).attr('action'),
            data: {
                nIdentifier : $(delid).find("#Identifier").val(),
                nSelector : "del",
                csrfmiddlewaretoken:$("input[name=csrfmiddlewaretoken]").val()
                },
            success: function (){
                $(delid).remove();
            }
        });
    });


});