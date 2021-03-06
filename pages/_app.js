import '../styles/globals.css';
import {Provider} from 'next-auth/client';
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Navbar />

      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
