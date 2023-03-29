"use client"

import styles from '../main.module.css'
import {AiFillHome, AiFillSetting} from 'react-icons/ai'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import { getAuth, signOut } from "firebase/auth";
import { app, provider } from "../../../config/firebase"
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'



function Settings () {

const auth = getAuth(app)
let router = useRouter()

const redirect = () => {
        router.push('/')
    }

const toaster = (msg) => {
        toast.success(msg, {
            autoClose:3000,
            theme: "dark",
          })
    }
const signoutHandeler = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        toaster('You don de go? Oya na 👋')
          setTimeout(() => {
            redirect()
          }, 3000)
        }).catch((error) => {
        // An error happened.
        });
    }



    return(
        <div className={styles.settings}>
        <ToastContainer />
            <button onClick={() => signoutHandeler()}>sign out</button>
        </div>
    )
}

export default Settings