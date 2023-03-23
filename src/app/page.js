import Image from 'next/image'
import styles from './main.module.css'
import Getstarted from '../../public/getstarted/getstarted.png'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      {/* Get Started page */}
      <div className={styles.container}>
        <h1>LADICHAT 🔥🔥</h1>
        <p>Helps you contact everyone with ease</p>
        <Image 
        src={Getstarted}
        placeholder="blur" 
        alt='pic showing how good this app'
        />
        <Link href='./Login' className={styles.btn} >Get Started</Link>
      </div>
    </div>
  )
}