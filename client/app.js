// wait for load.
$(document).ready(function () {
    $('.demo').click(function () {
        $(this).hide(200);
    });
});

let chirps;
const chirpsGet = () => {
    $.ajax({
        url: "http://localhost:3000/api/chirps",
        success: res => {
            chirps = res;
            // chirpsPrint(chirps);
        }
    });
}



$('body').append('<div id="controls"></div>');
$('#controls').append('<h1>chirpr</h1>');

const chirpModal = () => {
    $('#controls').append('<div id = "chirpModal"></div>');
    $('#chirpModal').append('<input id="account" type="text" name="account" placeholder="account" />');
    $('#chirpModal').append('<input id="content" type="text" name="chirp" placeholder="chirp" />');
    $('#chirpModal').append('<button id="chirp">chirp it</button>');
    $('#chirp').click(() => {
        let chirp = {};
        chirp.account = $('#account').val();
        chirp.content = $('#content').val();
        let chirpStr = JSON.stringify(chirp);
        $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/api/chirps',
            contentType: 'application/json; charset=utf-8',
            data: chirpStr
        });
        $('#output').append('<h3>chirp goes here.</h3>');
    });
}

$('body').append('<div id="output"></div>');

chirpsGet();
chirpModal();