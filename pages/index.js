import Head from 'next/head'
import styles from '../styles/Home.module.css'
import QuestionContainerBuilder from '../components/QuestionContainerBuilder'
import MapViewer from '../components/MapViewer'

export default function Home({session}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QuestionContainerBuilder />
    </div>
  )
}