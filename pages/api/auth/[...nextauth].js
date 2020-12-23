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
  callbacks: {
    signIn: async(user) => {
      if(user.error)
        return Promise.reject(new Error(user.error))
      else
        return Promise.resolve(true)
    },
    jwt: async(token, user, account, profile, isNewUser) => {

      user && (token.user = user)
      return Promise.resolve(token)
    },
    session: async (session, user, sessionToken) => {

      session.user = user.user
      return Promise.resolve(session)
    }
  },
  session: {
    jwt: true,

  },
  jwt:{
      secret: 'SuperSecretKey'
  },
  debug: true
}

export default (req, res) => NextAuth(req, res, options)