import questionTypes from '../../helpers/questionTypes'
import MapViewer from '../Map/MapViewer'
import OptionsRadioViewer from '../OptionsCheckbox/index'
import TextInput from '../TextInput/TextInput.viewer'
import TextArea from '../Textarea/Textarea.viewer'

const QuestionContainerViewer = ({question, onAnswerSelected}) => {

    const handleMapPointAdded = (location) => {
        onAnswerSelected(question, location)
    }

    const handleOnKeyUp = (text) => {
        onAnswerSelected(question, text)
    }

    const answerComponent = () => {

        switch(question.type){
            case questionTypes.singleLineText:
                return <TextInput onTextInput={handleOnKeyUp}/>

            case questionTypes.multipleLineText:
                return <TextArea onTextInput={handleOnKeyUp}/>

            case questionTypes.url:
                return <p>LINK component</p>

            case questionTypes.multiOptions:
                return <OptionsRadioViewer />

            case questionTypes.range:
                return <p>RangeComponent</p>

            case questionTypes.map:
                return <MapViewer onPointAdded={handleMapPointAdded}/>

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