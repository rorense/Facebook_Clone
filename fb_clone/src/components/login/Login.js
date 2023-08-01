import React from 'react';
import "../../assets/Login.css";
import { Button } from '@mui/material';
import { auth, provider } from "../../firebase/firebase";
import { useStateValue } from '../../context_api/StateProvider';
import { actionTypes } from '../../context_api/Reducer';

function Login() {

    const [state, dispatch] = useStateValue();

    // Sign in logic
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message))
    }

  return (
    <div className='login'>
        <div className='login__logo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/640px-2021_Facebook_icon.svg.png" alt=""/>
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
        </div>
        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>
    </div>
  )
}

export default Login