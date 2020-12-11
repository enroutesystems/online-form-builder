import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Login from '../../components/login'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar isLogin={false}/>
      <Login />
    </div>
  )
}
