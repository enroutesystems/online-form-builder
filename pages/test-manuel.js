import QuestionContainerViewer from '../components/QuestionContainer/QuestionContainerViewer'
import questionTypes from '../helpers/questionTypes'

const question = {
    text: 'Hola jeje', 
    type: questionTypes.map,
    minValue: 5,
    maxValue: 20,
    number: 1,
    options: [{text: 'Sí', optionAnswerId: '9w8r48wrg'}, {text: 'No', optionAnswerId: '4br89thbr'}]
}

const Prueba = () => {

    return(
        <div>
            <QuestionContainerViewer formId={'we1f53w1'} question={question} onAnswerSelected={(response) => console.log(response)}/>
        </div>
    )
}

export default Prueba