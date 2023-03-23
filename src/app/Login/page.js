"use client"

import Link from "next/link"
import styles from '../main.module.css'
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {IoArrowBackCircleOutline} from 'react-icons/io'
import { useState, useEffect } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth"
import { auth } from "../../../config/firebase"
import { useRouter } from 'next/navigation'



function login() {
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
              redirect()
            const uid = user.uid;
            // ...
          } else {
            // User is signed out
            // ...
          }
        });
    }, )
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
        router.push('../Chats')
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

    // Firebase

    const auth = getAuth()
    
    const clickHandler = () => {
        console.log("Clicked the submit button")

        // Form validation has to be done before upload
        
        createUserWithEmailAndPassword( auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          redirect()
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

    




  return (
    <div className={styles.login}>
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
            <FcGoogle size={30} />
            <AiFillApple size={30} />
            <BsFacebook size={30} color='blue' />
        </div>
    </div>
  )
}

export default login