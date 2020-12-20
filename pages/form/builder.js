import Layout from '../../components/builder/layout'
import {useSession} from 'next-auth/client'


function Builder() {

      const [session, setSession] = useSession()

      return <Layout user={session ? session.user : undefined}></Layout>
}

export default Builder
