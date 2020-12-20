import React, { Component } from 'react';
import Navbar from '../components/navbarDashboard'
import Card from '../components/cardDashboard'
import CardCreate from '../components/cardCreateDashboard'
import {getSession} from 'next-auth/client'
import api from '../helpers/api'

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {

      if(!this.props.forms.ok)
        return(
          <div>ERROR: ocurrió al traer los datos del servidor</div>
        )
      else
        return(
            <div className="min-h-screen auto-rows-auto">
                <div className="p-8 bg-gray-100 min-h-screen">
                    <div className="mb-6">
                        <h2 className="text-2xl">Workspace</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-5">
                        <CardCreate></CardCreate>
                        {this.props.forms.map((form) => {
                            return <Card name={form.formName} responsesNumber={0}></Card>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export async function getServerSideProps(context){

  const session = await getSession(context)
  let result

  try{
    result = await api.get('/api/form/get', {
      
    })
  }
  catch(err){result = err.response}

  return {
      props: {
          forms: result.data.result || result.response.data 
      }
  }
}