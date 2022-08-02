interface UserFacebookAuth {
    setFacebookToken(token : string);
    getFacebookLogin(token : string) : boolean;
}
interface UserGoogleAuth {
    setGoogleToken(token : string);
    checkGoogleLogin(token : string) : boolean;
}
interface AdminAuth {
    checkPassword(password: string) : boolean;
    resetPassword();
}

class UserFacebook implements UserFacebookAuth {
    private _facebookToken : string;

    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.

    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token : string) {
        this._facebookToken = token;
    }
}

class UserGoogle implements UserGoogleAuth {
    private _googleToken : string;

    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }
}

//admin cannot use google or facebook token
class Admin implements AdminAuth {
    private _password : string = 'admin';

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}

// class GoogleBot implements UserAuth {}

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');

let guestFacebook = new UserFacebook;
let guestGoogle = new UserGoogle;
let admin = new Admin;

document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    if(!loginAsAdminElement.checked) {
        if (typeGoogleElement.checked){
            guestGoogle.setGoogleToken('secret_token_google');
        }
        if (typeFacebookElement.checked){
            guestFacebook.setFacebookToken('secret_token_google');
        }
        if (loginAsAdminElement.checked){
            admin.resetPassword()
        }
    }
    debugger;

    let auth = false;
    switch(true) {
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

    if(auth) {
        alert('login success');
    } else {
        alert('login failed');
    }
});

resetPasswordElement.addEventListener('click', (event) => {
   event.preventDefault();

   // let guestFacebook = !typeFacebookElement.checked ? admin : guestFacebook;
   if (typeFacebookElement.checked){
       guestFacebook.setFacebookToken(passwordElement.value);
   }
   // let guestGoogle = !typeGoogleElement.checked ? admin : guestGoogle;
if (typeGoogleElement.checked){
    guestGoogle.setGoogleToken(passwordElement.value);
}
if (loginAsAdminElement.checked){
    admin.resetPassword()
}
});