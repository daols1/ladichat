"use client"

import  { BiArrowBack }  from "react-icons/bi"
import  { IoCall } from "react-icons/io5"
// import { ArrowLeftIcon } from '@radix-ui/react-icons'
import styles from '../main.module.css'
import { useState } from "react"
import Link from "next/link"


function Chatuser() {

  // State to get the typed message
  const [chatState, setChatState] = useState('')
  const typeHandler = (e) => {
    setChatState(e)
    console.log(chatState)
  }
  

  return (
    <div className={styles.chatpage}>
        {/* Head of chat section */}
        <div className={styles.userCred}>
            <div>
                <Link href='../chats' ><BiArrowBack size={30} /></Link>
            </div>
            <div>
                <h3>Robert Fox</h3>
                <p>online</p>
            </div>
            <div>
                <IoCall size={30} />
            </div>            
        </div>
        {/* Chats */}
        <div className={styles.chatBox}>
            {chatState}
        </div>

        {/* Input side  */}
        <div className={styles.inputChat}>
            <input type="text" 
            placeholder="Typehere...." 
            className={styles.inputBox}
            onChange={(e) => typeHandler(e.target.value)}
            />
            <button 
            className={styles.sendbtn}
            >Send</button>
        </div>
    </div>
  )
}

export default Chatuser