'use client'

// import Image from 'next/image'
import styles from '../main.module.css'
import {AiFillHome, AiFillSetting} from 'react-icons/ai'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import { getAuth, signOut } from "firebase/auth";
import { app, provider } from "../../../config/firebase"
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import Link from 'next/link';


function Chats() {

    const auth = getAuth(app)
    let router = useRouter()
    
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
                <Link href='../settings'><AiFillSetting size={30} /></Link>
                <p>Settings</p>
            </div>
        </div>
   </div>
  )
}

export default Chats