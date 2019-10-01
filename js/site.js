$(document).ready(function () {

    $(".mobilMenu").click(function () {
        $(".mobils").toggleClass("show");
    });

    $(function () {
        $('.selects').change(function () {
            console.log($(this).val());
        }).multipleSelect({
            width: '100%'
        });
    });
});
