import React from 'react';
import GoogleLogin from 'react-google-login';

const GoogleAuth = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle the response here, e.g., send token to your backend
  };

  return (
    <GoogleLogin
      clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleAuth;