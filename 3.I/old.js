var UserFacebook = /** @class */ (function () {
    function UserFacebook() {
    }
    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    UserFacebook.prototype.getFacebookLogin = function (token) {
        return (token === this._facebookToken);
    };
    UserFacebook.prototype.setFacebookToken = function (token) {
        this._facebookToken = token;
    };
    return UserFacebook;
}());
var UserGoogle = /** @class */ (function () {
    function UserGoogle() {
    }
    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    UserGoogle.prototype.checkGoogleLogin = function (token) {
        // return "this will not work";
        return (token === this._googleToken);
    };
    UserGoogle.prototype.setGoogleToken = function (token) {
        this._googleToken = token;
    };
    return UserGoogle;
}());
//admin cannot use google or facebook token
var Admin = /** @class */ (function () {
    function Admin() {
    }
    Admin.prototype.checkPassword = function (password) {
        return (password === this._password);
    };
    Admin.prototype.resetPassword = function (password) {
        this._password = password;
    };
    return Admin;
}());
// class GoogleBot implements UserAuth {}
var GoogleBot = /** @class */ (function () {
    function GoogleBot() {
    }
    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    GoogleBot.prototype.checkGoogleLogin = function (token) {
        // return "this will not work";
        return (token === this._googleToken);
    };
    GoogleBot.prototype.setGoogleToken = function (token) {
        this._googleToken = token;
    };
    return GoogleBot;
}());
var passwordElement = document.querySelector('#password');
var typePasswordElement = document.querySelector('#typePassword');
var typeGoogleElement = document.querySelector('#typeGoogle');
var typeFacebookElement = document.querySelector('#typeFacebook');
var loginAsAdminElement = document.querySelector('#loginAsAdmin');
var resetPasswordElement = document.querySelector('#resetPassword');
var guestFacebook = new UserFacebook;
var guestGoogle = new UserGoogle;
var admin = new Admin;
document.querySelector('#login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    if (!loginAsAdminElement.checked) {
        if (typeGoogleElement.checked) {
            guestGoogle.setGoogleToken('secret_token_google');
        }
        if (typeFacebookElement.checked) {
            guestFacebook.setFacebookToken('secret_token_google');
        }
        if (loginAsAdminElement.checked) {
            admin.checkPassword(passwordElement.value);
        }
    }
    debugger;
    var auth = false;
    switch (true) {
        case typePasswordElement.checked:
            auth = admin.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            auth = guestGoogle.checkGoogleLogin('secret_token_google');
            break;
        case typeFacebookElement.checked:
            debugger;
            auth = guestFacebook.getFacebookLogin('secret_token_fb');
            break;
    }
    if (auth) {
        alert('login success');
    }
    else {
        alert('login failed');
    }
});
resetPasswordElement.addEventListener('click', function (event) {
    event.preventDefault();
    // let guestFacebook = !typeFacebookElement.checked ? admin : guestFacebook;
    if (typeFacebookElement.checked) {
        guestFacebook.setFacebookToken(passwordElement.value);
    }
    // let guestGoogle = !typeGoogleElement.checked ? admin : guestGoogle;
    if (typeGoogleElement.checked) {
        guestGoogle.setGoogleToken(passwordElement.value);
    }
    if (loginAsAdminElement.checked) {
        admin.resetPassword(passwordElement.value);
    }
});
