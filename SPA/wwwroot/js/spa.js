$(document).ready(function () {
    $('#account').click(function () {
        $('#page-content-wrapper').load('account.html');
    })
});
$(document).ready(function () {
    $('#index').click(function () {
        $('#page-content-wrapper').load('indexPanel.html');
    })
});
$(document).ready(function () {
    $('#login').click(function () {
        $('#whole-page-content-wrapper').load('login.html');
    })
});