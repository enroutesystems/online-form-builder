import Head from 'next/head'
import styles from '../styles/Home.module.css'
import QuestionContainerBuilder from '../components/QuestionContainerBuilder'
import Navbar from '../components/navbar'
import Welcome from '../components/home'

export default function Home({session}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <Navbar isLogin={false}/>
      <Welcome/>
    </div>
  )
}
