// wait for load.
$(document).ready(function () {
    $('.demo').click(function () {
        $(this).hide(200);
    });
});

$('body').append('<div id="controls"></div>');
$('#controls').append('<h1>chirpr</h1>');

const chirpModal = () => {
    $('#controls').append('<div id = "chirpModal"></div>');
    $('#chirpModal').append('<input type="text" name="account" placeholder="account" />');
    $('#chirpModal').append('<input type="text" name="chirp" placeholder="chirp" />');
    $('#chirpModal').append('<button id="chirp">chirp it</button>');
    $('#chirp').click(function () {
        $('#output').append('<h3>chirp goes here.</h3>');
    })
}

$('body').append('<div id="output"></div>');

chirpModal();