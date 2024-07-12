import React, { useState } from 'react';
import Input from '../Input'; // Correctly import the Input component
import "./styles.css";
import Button from '../Button';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

function SignupSigninComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] =useState("");
    const [loading,setLoading]= useState(false);

    function signupWithEmail(){
        setLoading(true);
        if(name!="" && email!="" && password!="" && confirmPassword != ""){
            if(password===confirmPassword){
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
            // Signed up 
                 const user = userCredential.user;
                 toast.success("User Created");
                 setLoading(false);
                 setName("");
                 setEmail("");
                 setPassword("");
                 setConfirmPassword("");
                 createDoc(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            setLoading(false);

            // ..
          });
              

            }else{
                toast.error("Password and Confirm Password Don't Match");
                setLoading(false);
            }
           

        }else{
            toast.error("All fields required");
            setLoading(false);

        }

      
    }
    
    function createDoc(user){

    }

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
                    type="email"
                    label={"Email"} 
                    state={email} 
                    setState={setEmail} 
                    placeholder={"Enter your email id"}
                />
                 <Input 
                    type="password"
                    label={"Password"} 
                    state={password} 
                    setState={setPassword} 
                    placeholder={"Enter your password"}
                />
                 <Input 
                    type="password"
                    label={"Confirm Password"} 
                    state={confirmPassword} 
                    setState={setConfirmPassword} 
                    placeholder={"Confirm your password"}
                />
                <Button 
                disabled={loading}
                 text={loading ? "Loading..." : "Signup Using Email and Paswword"} onClick={signupWithEmail} />
                <p style={{textAlign:"center", margin: 0}}>or </p>
                <Button text={loading ? "Loading..." : "Signup Using Google"} blue={true} />
            </form>
        </div>
    );
}

export default SignupSigninComponent;
