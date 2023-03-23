// import Image from 'next/image'
import styles from '../main.module.css'
import {AiFillHome, AiFillSetting} from 'react-icons/ai'
import {BsFillPersonCheckFill} from 'react-icons/bs'

function chats() {
  return (
    <div className={styles.chats}>
        <input type="search" placeholder='Search Chat' className={styles.search} />
        <ul className={styles.menu}>
            <li>Chats</li>
            <li>Friends</li>
            <li>Calls</li>
        </ul>
        <div className={styles.chatBox}>
            {/* <Image /> */}
            <div>
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
                <AiFillSetting size={30} />
                <p>Settings</p>
            </div>
        </div>
   </div>
  )
}

export default chats