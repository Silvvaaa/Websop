import React from "react";
import SignIn from '../../components/sign-in/sign-in.component';
import './sign-in-and-up.styles.scss';
import SignUp from '../../components/sign-up/sign-up.component';
const SignInAndUpPage = () => (
    <div className="sign-in-and-up"> 
    <SignIn/> 
    <SignUp/>
    </div>
);
export default SignInAndUpPage;