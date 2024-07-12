import React, { useState } from 'react';
import Input from '../Input'; // Correctly import the Input component
import "./styles.css";
import Button from '../Button';

function SignupSigninComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] =useState("");

    return (
        <div className="signup-wrapper">
            <h2 className='title'>
                Sign Up on <span style={{color: "var(--theme)"}}>FinTrack.</span>
            </h2>
            <form>
                <Input 
                    label={"Full Name"} 
                    state={name} 
                    setState={setName} 
                    placeholder={"Enter your full name"}
                />
                 <Input 
                    label={"Email"} 
                    state={email} 
                    setState={setEmail} 
                    placeholder={"Enter your email id"}
                />
                 <Input 
                    label={"Password"} 
                    state={password} 
                    setState={setPassword} 
                    placeholder={"Enter your password"}
                />
                 <Input 
                    label={"Confirm Password"} 
                    state={confirmPassword} 
                    setState={setConfirmPassword} 
                    placeholder={""}
                />
                <Button text={"Signup Using Email and Paswword"} />
            </form>
        </div>
    );
}

export default SignupSigninComponent;
