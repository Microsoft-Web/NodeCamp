$('#send-message-btn').click(function () {
    var msg = $('#message-box').val();
    $('#messages').append($('<p>').text(msg));
    $('#message-box').val('');
    return false;
});