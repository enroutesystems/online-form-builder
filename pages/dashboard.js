import Head from 'next/head'
import React, { Component } from 'react';
import Card from '../components/cardDashboard'
import CardCreate from '../components/cardCreateDashboard'
import {getSession} from 'next-auth/client'
import api from '../helpers/api'
import Redirect from 'next/router'
export default class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    redirectToBuilder = () => {
        Redirect.replace('/form/builder')
    }

    render() {

      if(!this.props.forms)
        return(
          <>
            <Head>
              <title>Formify | Dashboard</title>
              <link rel="icon" href="/formify.ico" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            </Head>
            <div>ERROR: ocurrió al traer los datos del servidor</div>
          </>
        )
      else
        return(
          <>
            <Head>
              <title>Formify | Dashboard</title>
              <link rel="icon" href="/formify.ico" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            </Head>
            <div className="min-h-screen auto-rows-auto">
                <div className="p-8 bg-gray-100 min-h-screen">
                    <div className="mb-6">
                        <h2 className="text-2xl">Workspace</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-5">
                        <CardCreate onClick={this.redirectToBuilder}></CardCreate>
                        {this.props.forms.map((form) => {
                            return <Card formId={form.formId} name={form.formName} responsesNumber={0}></Card>
                        })}
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export async function getServerSideProps(context){

  const session = await getSession(context)
  let result

  try{
    result = await api.get('/api/form/get', {
      uid: session.user.uid
    })
  }
  catch(err){result = err.response}

  return {
      props: {
          forms: result.data.result || result.response.data
      }
  }
}
