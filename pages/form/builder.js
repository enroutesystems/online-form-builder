import Head from 'next/head'
import Layout from '../../components/builder/layout'
import {useSession} from 'next-auth/client'


function Builder() {

      const [session, setSession] = useSession()

      return (
            <>
                  <Head>
                        <title>Formify | Form Builder</title>
                        <link rel="icon" href="/formify.ico" />
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                  </Head>
                  <Layout user={session ? session.user : undefined}></Layout>
            </>
      )
}

export default Builder
