import api from '../../helpers/api'

const FormView = ({form}) => {

    return(
        <div>
            {JSON.stringify(form)}
        </div>
    )
}

export async function getServerSideProps(context){
    
    const formId = context.query.formId
    const uid = context.query.uid

    let response
    try {
        response = await api.get('/api/form/get', {
            uid,
            formId
        })
    }
    catch(err){ response = err.response}

    return{
        props: {
            form: response.data.result
        }
    }
}

export default FormView