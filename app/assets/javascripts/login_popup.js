$(document).ready(function(){
    var username = Discourse.User.current().name;
    $('#login-popup').html("<div id='popup-message'>You are logged in as " + username + ". <a href='#' id='popup-logout'>Logout?</a></div><div id='popup-close'><i class='fa fa-times popup-close'></i></div>");
    $('#login-popup').show();

    $('#popup-logout').click(function(){
        var discourseUserClass = Discourse.User;
        return Discourse.ajax("/session/" + Discourse.User.currentProp('username'), {
            type: 'DELETE'
         }).then(function () {
            discourseUserClass.currentUser = null;
            document.location.href = window.location.origin;
         });
    });

    $('#popup-close').click(function(){
        $('#login-popup').fadeOut();
    });

    $('#login-popup').fadeOut(5000);
});
