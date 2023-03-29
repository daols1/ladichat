"use client"

import  { BiArrowBack }  from "react-icons/bi"
import  { IoCall } from "react-icons/io5"
import styles from '../main.module.css'
import { useState, useRef } from "react"
import Link from "next/link"
import { app, provider, db } from "../../../config/firebase"
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import { async } from "@firebase/util"



function Chatuser() {

  // State to get the typed message
  //  const chatRef = useRef()
  const [chatState, setChatState] = useState('')
  const typeHandler = (e) => {
    setChatState(e)
    console.log(chatState)
  }
  
  // Firebase code to add new docs
  
  const sendHandler = async() => {
    // chatState.reset()
    try {
    const docRef = await addDoc(collection(db, "messages"), {
      message: `${chatState}`,
      // uid: user.uid,
      timestamp: serverTimestamp(),
    });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // Submmiter 
  const submitHandler = (e) => {
    sendHandler()
  }

  // Firebase code to read data
  let currentDoc;
  let latestMsg;


  const docsGetter = async() => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data())
      latestMsg = doc.data()
    });
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
        {/* <div className={styles.chatBox}> */}
          {
            latestMsg?.map((item) => {
              return(
                <div className={styles.chatBox}>
                  {item.message}
                </div>
              )
            })
          }
            {chatState}
        {/* </div> */}

        {/* Input side  */}
        <div className={styles.inputChat}>
          <form action="" onSubmit={(e) => {
            submitHandler(e)
            e.preventDefault()
            sendHandler()
          }}>

            <input type="text" 
            placeholder="Typehere...." 
            className={styles.inputBox}
            // onChange={(e) => typeHandler(e.target.value)}
            onInput= {(e) => typeHandler(e.target.value)}
            onSubmit = { (e) => e.reset() }
            />
            <button 
            className={styles.sendbtn}
            onClick = {() => {
              sendHandler()
              docsGetter()
              submitHandler()
            }}
            >Send</button>
          </form>
        </div>
    </div>
  )
}

export default Chatuser