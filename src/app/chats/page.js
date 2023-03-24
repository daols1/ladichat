'use client'

// import Image from 'next/image'
import styles from '../main.module.css'
import {AiFillHome, AiFillSetting} from 'react-icons/ai'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import { getAuth, signOut } from "firebase/auth";
import { app, provider } from "../../../config/firebase"
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'


function Chats() {

    const auth = getAuth(app)
    let router = useRouter()
    const redirect = () => {
        router.push('/')
    }
    const redirectChats = () => {
        router.push('./chatview')
    }

    // Toast fn passing in desired message.
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


  return (
    <div className={styles.chats}>
        <ToastContainer />
        <input type="search" placeholder='Search Chat' className={styles.search} />
        <ul className={styles.menu}>
            <li>Chats</li>
            <li>Friends</li>
            <li>Calls</li>
        </ul>
        <div className={styles.viewBox}>
            {/* <Image /> */}
            <div onClick={() => redirectChats()}>
                <h4>Robert Fox</h4>
                <p>hey whats going on?</p>
            </div>
            <p>15:43</p>
        </div>
        <button onClick={() => signoutHandeler()}>sign out</button>
        <div className={styles.menu}>
            <div>
                <AiFillHome size={30} />
                <p>Home</p>
            </div>
            <div>
                <BsFillPersonCheckFill size={30} />
                <p>Contacts</p>
            </div>
            <div>
                <AiFillSetting size={30} />
                <p>Settings</p>
            </div>
        </div>
   </div>
  )
}

export default Chats