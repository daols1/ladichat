'use client'

import Image from 'next/image'
import styles from './main.module.css'
import getstarted from '../../public/getstarted/getstarted.png'
import Link from 'next/link'
import { useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from '../../config/firebase'
import { useRouter } from 'next/navigation'




export default function Home() {


  // Redirect loggedin user logic


  let router = useRouter()
  const redirect = () => {
    router.push('../chats')
  }

  const auth = getAuth(app)

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



  return (
    <div>
      {/* Get Started page */}
      <div className={styles.container}>
        <h1>LADICHAT 🔥🔥</h1>
        <p>Helps you contact everyone with ease</p>
        <Image 
        src={getstarted}
        placeholder="blur" 
        alt='pic showing how good this app'
        />
        <Link href='./login' className={styles.btn} >Get Started</Link>
      </div>
    </div>
  )
}