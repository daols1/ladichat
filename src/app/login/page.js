"use client"

import Link from "next/link"
import styles from '../main.module.css'
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import { useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app, provider } from "../../../config/firebase"
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"



function Login() {
    
    // State initialization

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let router = useRouter()

    const emailHandler = (value) =>{
        setEmail(value)
    }
    const passwordHandler = (value) =>{
        setPassword(value)
    }

    // Redirect on login

    const redirect = () => {
        router.push('../chats')
    }

    // Alert Function 

    // const alertState = () => {
    //     return(
    //         <div className={styles.alertBoxOuter}>
    //             <div className={styles.alertBox}>
    //                 Nice you have succefully logged in 😀
    //             </div>
    //         </div>
    //     )
    // }

    // Toast fn passing in what you wanna display

    // Toast fn passing in desired message.
    const toaster = (msg) => {
        toast.success(msg, {
            autoClose:3000,
            theme: "dark",
          })
    }

    // Firebase

    const auth = getAuth(app)
    
    const clickHandler = () => {
        console.log("Clicked the submit button")

        // Form validation has to be done before upload
        
        createUserWithEmailAndPassword( auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          toaster('You have sussefully logged in 💥')
          setTimeout(() => {
            redirect()
          }, 3000)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

    const googleHandler = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
  });
    }

  



  return (
    <div className={styles.login}>
        <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Link href='/' className={styles.backbtn}> 👈 Back</Link>
        <h3 className={styles.loginH3}>Hello Welcome Back</h3>
        <p>Happy to see you again, to use your account plese login first.</p>
        <div className={styles.inputDiv}>
            <label htmlFor="email">Email Address:</label>
            <input name="Email" type='Email' placeholder="example@gmail.com" onChange={(e) => emailHandler(e.target.value)} />
        </div>
        <div className={styles.inputDiv}>
            <label htmlFor="passowrd">Password:</label>
            <input name="password" type='password' onChange={(e) => passwordHandler(e.target.value)} />
        </div>
        <button className={styles.btn} onClick={() => clickHandler()} >Submit</button>
        <p>or Login with</p>
        <div>
            <FcGoogle size={30} onClick={() => googleHandler()} />
            <AiFillApple size={30} />
            <BsFacebook size={30} color='blue' />
        </div>
    </div>
  )
}

export default Login