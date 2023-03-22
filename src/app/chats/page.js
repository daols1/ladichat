// import Image from 'next/image'
import styles from '../main.module.css'

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
                <p>hey what's going on?</p>
            </div>
            <p>15:43</p>
        </div>
   </div>
  )
}

export default chats