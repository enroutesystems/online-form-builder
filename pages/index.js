import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Welcome from '../components/home';
import {getSession} from 'next-auth/client'
import Router from 'next/dist/next-server/lib/router/router';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      
      <Welcome/>
    </div>
  )
}

Home.getInitialProps = async context => {

  const session = await getSession(context)

  if(context && context.req){

    if(session.user){

      context.res.writeHead(302, {Location: '/dashboard'})
      context.res.end()
    }
    
  }
  else{

    if(session.user){
      Router.push('/dashboard')
    }
  }
}

export default Home