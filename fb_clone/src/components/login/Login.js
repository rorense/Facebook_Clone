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
            <img src="https://img.icons8.com/?size=512&id=66755&format=png" alt=""/>
            <span>R Book</span>
        </div>
        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>
    </div>
  )
}

export default Login