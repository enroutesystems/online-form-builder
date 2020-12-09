import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MapBuilder from '../components/MapBuilder'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <MapBuilder onPointAdded={(point) => console.log(point)}/>
      </div>
    </div>
  )
}
