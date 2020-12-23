import {useState} from 'react'
import api from '../../helpers/api'
import QuestionContainerViewer from '../../components/QuestionContainer/QuestionContainerViewer'
import {getSession} from 'next-auth/client'
import alert from '../../helpers/alert'
import questionTypes from '../../helpers/questionTypes'
import {MoonLoader} from 'react-spinners'
import firebase from '../../firebaseConfig.client'
import 'firebase/storage'

const FormView = ({data, user}) => {

    const [answers, setAnswers] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [formCompleted, setFormCompleted] = useState(false)

    const handleAnswerSelected = (selected) => {

        const answerIndex = answers.findIndex(answer => answer.number === selected.question.number)

        if(answerIndex !== -1){

            setAnswers(answers.map((answer, index) => {
                if(answerIndex === index)
                    return {number: selected.question.number, value: selected.answer}
                else
                    return answer
            }))
        }
        else{
            const newAnswers = [...answers, {number: selected.question.number, value: selected.answer}]
                .sort((a, b) => a.number - b.number)

            setAnswers(newAnswers)
        }
    }

    const getAnswersParam = async() => {
        const arrayAnswers = []
        for(let answerIdx in answers){

            let answerObject = {questionId: data.result.questions[answerIdx].questionId}

            if(questionTypes.file === data.result.questions[answerIdx].type){
                const storageRef = firebase.storage().ref()
                answerObject.response = []

                for(let i = 0; i < answers[answerIdx].value.length; i++){
                    try{
                        const snapshot = await storageRef.child('' + Date.now() + answers[answerIdx].value[i].name).put(answers[answerIdx].value[i])
                        answerObject.response.push(await (await snapshot.task).ref.getDownloadURL())
                    }
                    catch { return }
                }
            }
            else{

                //if answer has type single-line-text, multiple-line-text or range
                if(questionTypes.multiOptions === data.result.questions[answerIdx].type)
                    answerObject.optionAnswerId = answers[answerIdx].value
                else
                    answerObject.response = answers[answerIdx].value
            }

            arrayAnswers.push(answerObject)
        }

        return arrayAnswers
    }

    const sendAnswers = async(e) => {
        e.preventDefault()

        setIsFetching(true)

        if(data.result.questions.length > answers.length){
            alert.warning('You must answer all questions before you submit them')
            setIsFetching(false)
            return
        }

        const arrayAnswers = await getAnswersParam()

        if(!arrayAnswers){
            alert.error('Error while trying to upload files to database')
            setIsFetching(false)
            return
        }
        
        let response
        try{
            response = await api.post('/api/form/answers/send', {
                uid: user ? user.uid : undefined,
                formId: data.result.formId,
                answers: arrayAnswers
            })
        }
        catch(err){ response = err.response}

        if(response.data.ok){
            alert.success("Questions submited successfully")
            setFormCompleted(true)
        }
        else
            alert.error(response.data.message)

        setIsFetching(false)
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
                                formId={data.result.formId}
                                key={question.questionId}
                                question={question}
                                onAnswerSelected={handleAnswerSelected}/>
                        })
                    }
                    <button
                    className='bg-indigo-800 border-indigo-500 rounded-sm p-3 text-white mt-5 min-w-50'
                    onClick={sendAnswers}
                    >
                        {isFetching ? <MoonLoader size={20}/> : 'Submit answers'}
                    </button>
                </>
            )
        }
    }

    return(
        <div className='mx-52 place-content-center'>
           <h1 className='font-bold text-3xl text-center mb-6'>{data.result ? data.result.formName : ''}</h1>
            {!formCompleted
                ? renderQuestions()
                : <div className='justify-center text-center'>Thank you for your time! <span>😊</span></div>}
        </div>
    )
}

export async function getServerSideProps(context){

    const formId = context.query.formId
    const session = await getSession(context)

    let response
    try {
        response = await api.get('/api/form/get', {
            uid: session ? session.user.uid: undefined,
            formId
        })
    }
    catch(err){ response = err.response}
    
    const props = {data: response.data}

    if(session)
        props.user = session.user

    return{
        props
    }
}

export default FormView
