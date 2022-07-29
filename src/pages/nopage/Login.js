import React, { useEffect } from 'react';

function Login() {
  useEffect(() => {
    console.log('Hii');
    insertScript();
  }, []);

  const insertScript = () => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.onload = () => {
      initializeGoogleSigIn();
    };
    document.body.appendChild(script);
  };

  const initializeGoogleSigIn = () => {
    window.gapi.load('auth2', () => {
      let auth2 = gapi.auth2.init({
        client_id:
          '277236884335-6h7cqrkmfro2d9c5oi516nqlp5ipnk0o.apps.googleusercontent.com',
      });
      console.log('api inited');
      window.gapi.load('signin2', function () {
        // render a sign in button
        // using this method will show Signed In if the user is already signed in
        var params = {
          width: 240,
          height: 50,
          longtitle: true,
          onsuccess: (googleUser) => {
            console.log('user has finished sigin');
          },
        };
        window.gapi.signin2.render('loginButton', params);
      });
    });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div id="loginButton" className="btn">
          Signin
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
