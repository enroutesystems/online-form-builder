import api from '../helpers/api'
import OpenAnswer from '../components/AnswerDisplay/OpenAnswer'
import LinkAnswer from '../components/AnswerDisplay/LinkAnswer'
import MapAnswer from '../components/AnswerDisplay/MapAnswer'
import OptionAnswer from '../components/AnswerDisplay/OptionAnswer'
import questionTypes from '../helpers/questionTypes'

function Answers({data}) {

    const getResponsersEmails = () => {

        const users = []

        data.responses.filter(response => response.question.questionId === data.responses[0].question.questionId)
        .map(response => {

            users.push(response.user.email)

        })

        return users
    }

    const getQuestions = () => {
        const arrayQuestionId = []
        const arrayQuestion = []

        data.responses.map(response => {

            if(arrayQuestionId.includes(response.question.questionId))
                return response
            else{
                arrayQuestionId.push(response.question.questionId)
                arrayQuestion.push(response.question)
                return response
            }
        })

        return arrayQuestion
    }

    return <div>
        <div className="flex items-center justify-center">
            <div className="flex justify-center flex-col items-center w-full">
                <div className="bg-gray-900 w-full flex items-center justify-center py-8">
                    <div className="w-2/3 text-white">
                        <div className="text-2xl font-semibold mb-2">
                            FORM: {data.formId}
                        </div>
                        <div className="text-gray-300">
                            {getResponsersEmails().length} Answer(s)
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 w-full flex items-center justify-center py-8">
                    <div className="w-2/3">
                        <div className="text-lg font-semibold mb-6">
                            People who answered
                        </div>
                        <div className="grid grid-cols-4 gap-4 text-xs">
                            {getResponsersEmails().map((email, index) => (
                                <div key={'userCard' + index} className="bg-white border border-gray-300 rounded">
                                    <div className="p-3 flex items-center">
                                        <div className="h-8 w-8 rounded-full mr-2 bg-gray-200 border border-gray-400"></div>
                                        <div>
                                            <p className="font-semibold">
                                                {email}
                                            </p>
                                            <a href="#/" className="text-blue-400">
                                                View answers
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {getQuestions().map((question, index) => {
                    const filteredResponses = data.responses.filter(response => response.question.questionId === question.questionId)

                    if([questionTypes.singleLineText, questionTypes.multipleLineText].includes(question.type))
                        return <OpenAnswer key={`QuestionAnswer ${question.questionId}`} responses={filteredResponses}/>

                    if(questionTypes.link === question.type)
                        return <LinkAnswer key={`QuestionAnswer ${question.questionId}`} responses={filteredResponses} />

                    if(questionTypes.map === question.type)
                        return <MapAnswer key={`QuestionAnswer ${question.questionId}`} responses={filteredResponses} />

                    if([questionTypes.multiOptions, questionTypes.range].includes(question.type))
                        return <OptionAnswer key={`QuestionAnswer ${question.questionId}`} responses={filteredResponses} />
                })}
            </div>
        </div>
    </div>
}

export const getServerSideProps = async(context) => {

    const formId = context.query.formId
    const params = {
        formId
    }

    let response

    try{
        response = await api.get('/api/form/answers/get', params)
    }
    catch(err){ response = err.response}

    return {
        props: {
            data: response.data
        }
    }
}

export default Answers
