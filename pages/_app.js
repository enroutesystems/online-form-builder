import '../styles/globals.css';
import {Provider} from 'next-auth/client';
import { useSession } from 'next-auth/client';
import Navbar from "../components/navbar";
import NavbarDashboard from "../components/navbarDashboard";

function MyApp({ Component, pageProps }) {
  const [session, loading] = useSession();

  return (
    <Provider session={pageProps.session}>
      {console.log(pageProps)}
      {session ? <Navbar /> : <NavbarDashboard />}
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
