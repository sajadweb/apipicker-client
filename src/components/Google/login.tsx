import React from 'react';
import GoogleLogin from 'react-google-login';
import Button from '@material-ui/core/Button';

const responseGoogle = (response:any) => {
    console.log("google login",response);
}
export default function () {
    return (
        <GoogleLogin
            clientId="313019994556-6sauaqra7llmi2d4re0sjr1oucvhcj0g.apps.googleusercontent.com" 
            render={(renderProps:any )=> ( 
                <Button variant="contained" color="secondary" onClick={renderProps.onClick}>
                    {"ورود با اکانت گوگل"}
                </Button>
              )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )

}