import questionTypes from '../../helpers/questionTypes'
import MapViewer from '../Map/MapViewer'
import OptionsRadioViewer from '../OptionsRadio/OptionsRadio.viewer'
import TextInput from '../TextInput/TextInput.viewer'
import TextArea from '../Textarea/Textarea.viewer'
import LinkInput from '../LinkInput/LinkInput.viewer'
import Range from '../Range/Range.viewer'

const QuestionContainerViewer = ({formId, question, onAnswerSelected}) => {

    const handleAnswer = (answer) => {
        onAnswerSelected({question, answer})
    }

    const answerComponent = () => {

        switch(question.type){
            case questionTypes.singleLineText:
                return <TextInput onTextInput={handleAnswer}/>

            case questionTypes.multipleLineText:
                return <TextArea onTextInput={handleAnswer}/>

            case questionTypes.link:
                return <LinkInput onUrlInputs={handleAnswer}/>

            case questionTypes.multiOptions:
                return <OptionsRadioViewer 
                    formId={formId}
                    questionNumber={question.number} 
                    radioOptions={question.options} 
                    onSelectOption={handleAnswer}/>

            case questionTypes.range:
                return <Range minValue={question.range.minValue} maxValue={question.range.maxValue} onValueChange={handleAnswer}/>

            case questionTypes.map:
                return <MapViewer onPointAdded={handleAnswer}/>

            case questionTypes.file:
                return <p>File Uploader</p>
        }

    }

    return(
        <div className='card bg-gray-100 rounded shadow-md border border-gray-300 cursor-pointer my-4 p-5'>
            <div className='mt-1 mb-5'>
                <p className='font-medium'>{question.text}</p>
            </div>
            <div>
                {answerComponent()}
            </div>
        </div>
    )
}

export default QuestionContainerViewer