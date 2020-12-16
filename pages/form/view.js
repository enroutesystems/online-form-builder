import {useState} from 'react'
import api from '../../helpers/api'
import QuestionContainerViewer from '../../components/QuestionContainer/QuiestionContainerViewer'

const FormView = ({form}) => {

    const [answers, setAnswers] = useState([])

    const handleAnswerSelected = (question, value) => {

        setAnswers([...answers, {question, value}])
    }

    const renderQuestions = () => {
        if(form.message){
            return(
                <div>{form.message}</div>
            )
        }
        else{
            return form.questions.map(question => {
                return <QuestionContainerViewer 
                    key={question.questionId} 
                    question={question} 
                    onAnswerSelected={handleAnswerSelected}/>
            })
        }
    }

    return(
        <div className='mx-28 place-content-center'>
           <h1 className='font-bold text-3xl text-center mb-6'>{form ? form.formName : ''}</h1> 
            {renderQuestions()}
            <button className='bg-indigo-300 border-indigo-500 rounded-sm p-3 text-white mt-5'>Send answers</button>
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