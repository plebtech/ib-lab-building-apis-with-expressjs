// wait for load.
$(document).ready(function () {
    $('.demo').click(function () {
        $(this).hide(200);
    });
});

// ajax request for chirps json manifest, on successful load calls chirpsPrint.
let chirps;
const chirpsGet = () => {
    $.ajax({
        url: "http://localhost:3000/api/chirps",
        success: res => {
            chirps = res;
            chirpsPrint(chirps);
        }
    });
}

$('body').append('<div id="controls"></div>');
$('#controls').append('<h1>chirpr</h1>');

// prepends all chirps to #output div.
const chirpsPrint = chirps => {
    $('#output').html('');
    for (chirp in chirps) {
        let account = chirps[chirp].account;
        let content = chirps[chirp].content;
        if (account !== undefined) {
            $('#output').prepend(`<h3>${parseInt(chirp) + 1}: "${content}" @${account}</h3>`);
        }
    }
}

const chirpModal = () => {
    $('#controls').append('<div id = "chirpModal"></div>');
    $('#chirpModal').append('<input id="account" type="text" name="account" placeholder="account" />');
    $('#chirpModal').append('<input id="content" type="text" name="chirp" placeholder="chirp" />');
    $('#chirpModal').append('<button id="chirp">chirp it</button>');
    $('#chirp').click(async () => {
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
        chirpsGet();
    });

}

$('body').append('<div id="output"></div>');

chirpsGet();
chirpModal();