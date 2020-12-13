import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { firebaseLogin } from '../../../helpers/user'

const options = {
  providers: [
    Providers.Credentials({
        name: 'Firebase security',
        credentials:{
            email: {label: 'Email', type: 'text', placeholder:'your@mail.com'},
            password: {label: 'Password', type: 'password'}
        },
        authorize: async(credentials) => {
            const user = await firebaseLogin(credentials.email, credentials.password)
            return Promise.resolve(user)
        }
    })
  ],
  session: {
    jwt: true
  },
  jwt:{
      secret: 'SuperSecretKey'
  },
  debug: true
}

export default (req, res) => NextAuth(req, res, options)