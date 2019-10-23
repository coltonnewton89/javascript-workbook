$('#move_left').click(function () {
    $('.list1').append($('.list2 .selected').removeClass('selected'));
});

$('#move_right').click(function () {
    $('.list2').append($('.list1 .selected').removeClass('selected'));
});