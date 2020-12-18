import {useState} from 'react'
import api from '../../helpers/api'
import QuestionContainerViewer from '../../components/QuestionContainer/QuestionContainerViewer'
import {getSession} from 'next-auth/client'

const FormView = ({data}) => {

    const [answers, setAnswers] = useState([])

    const handleAnswerSelected = (question, value) => {
        
        const answerIndex = answers.findIndex(answer => answer.number === question.number)
        
        if(answerIndex !== -1){
            
            setAnswers(answers.map((answer, index) => {
                if(answerIndex === index)
                    return {number: question.number, value}
                else
                    return answer
            }))
        }
        else{
            
            setAnswers([...answers, {number: question.number, value}])
        }
    }

    const renderQuestions = () => {
        if(data.result.message){
            return(
                <div>{data.result.message}</div>
            )
        }
        else{
            return (
                <> 
                    {
                        data.result.questions.sort((a, b) => a.number - b.number).map(question => {
                            return <QuestionContainerViewer 
                                key={question.questionId} 
                                question={question} 
                                onAnswerSelected={handleAnswerSelected}/>
                        })
                    }
                    <button className='bg-indigo-300 border-indigo-500 rounded-sm p-3 text-white mt-5'>Send answers</button>
                </>
            )
        }
    }

    return(
        <div className='mx-52 place-content-center'>
           <h1 className='font-bold text-3xl text-center mb-6'>{data.result ? data.result.formName : ''}</h1> 
            {renderQuestions()}
        </div>
    )
}

export async function getServerSideProps(context){
    
    const formId = context.query.formId
    const session = await getSession(context)

    let response
    try {
        response = await api.get('/api/form/get', {
            uid: session.user.uid,
            formId
        })
    }
    catch(err){ response = err.response}

    return{
        props: {
            data: response.data
        }
    }
}

export default FormView