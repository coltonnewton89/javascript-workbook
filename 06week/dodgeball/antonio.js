$('makeBlueTeam').click(function () {
    $('#players').append($('#blue .selected').removeClass('selected'));
});

$('#move_right').click(function () {
    $('#players').append($('#red .selected').removeClass('selected'));
});

