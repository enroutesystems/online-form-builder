import {useState, useRef} from 'react'
import MapBuilder from '../Map/MapBuilder'
import OptionsRadioBuilder from '../OptionsRadio/OptionsRadioBuilder'
import TextInput from '../TextInput/TextInput.viewer'
import TextArea from '../Textarea/Textarea.viewer'
import Range from '../Range/Range.builder'
import questionTypes from '../../helpers/questionTypes'
import LinkInputBuilder from '../LinkInput/LinkInput.builder'

const answerTypeOptions = Object.values(questionTypes)

const QuestionContainerBuilder = ({type, text, options, range, onQuestionChange}) => {

    const [question, setQuestion] = useState({type: type || questionTypes.singleLineText, text: text || ''})
    const selectAnswerType = useRef()

    const handleQuestionTypeChange = () => {
        const newType = selectAnswerType.current.value
        let options
        let range

        if(newType === questionTypes.multiOptions){
            options = [{index: 0, text: ''}, {index: 1, text: ''}]
        }

        if(newType === questionTypes.range)
            range = {minValue: 0, maxValue: 10}

        const newQuestion = {type: newType, text: question.text}

        if(options)
            newQuestion.options = options

        if(range)
            newQuestion.range = range

        setQuestion(newQuestion)
        onQuestionChange(newQuestion)
    }

    const handleQuestionTextChange = (e) => {
        const newQuestion = {...question, text: e.target.value}

        setQuestion(newQuestion)
        onQuestionChange(newQuestion)
    }

    const handleRadioOptionsChange = (options) => {
        if(!(options instanceof Array))
            return
        const newQuestion = {...question, options}

        setQuestion(newQuestion)
        onQuestionChange(newQuestion)
    }

    const handleRangeMinChange = (objRange) => {
        const newQuestion = {...question}
        newQuestion.range = objRange

        setQuestion(newQuestion)
        onQuestionChange(newQuestion)
    }

    const handleRangeMaxChange = (objRange) => {
        const newQuestion = {...question}
        newQuestion.range = objRange

        setQuestion(newQuestion)
        onQuestionChange(newQuestion)
    }

    const answerComponent = () => {

        switch(question.type){
            case questionTypes.singleLineText:
                return <TextInput disabled={true}/>

            case questionTypes.multipleLineText:
                return <TextArea disabled={true}/>

            case questionTypes.link:
                return <LinkInputBuilder />

            case questionTypes.multiOptions:
                return <OptionsRadioBuilder options={options} onRadioOptions={handleRadioOptionsChange}/>

            case questionTypes.range:
                return <Range minValue={range ? range.minValue : undefined} 
                        maxValue={range ? range.maxValue : undefined} 
                        onMinChange={handleRangeMinChange} 
                        onMaxChange={handleRangeMaxChange}/>

            case questionTypes.map:
                return <MapBuilder/>

            case questionTypes.file:
                return <p>File Uploader</p>
        }
    }

    return(
        <div className='m-5'>
            <p>Select answer type:</p>
            <select className='bg-gray-200' ref={selectAnswerType} onChange={handleQuestionTypeChange} defaultValue={type}>
                {answerTypeOptions.map((option, id) => (
                    <option value={option} key={id + option}>{option}</option>
                ))}
            </select>
            <div className='mt-1 mb-5'>
                <input 
                    className='bg-transparent border-b border-black py-3 placeholder:text-black w-2/3' 
                    type='text' 
                    placeholder='Your question here...' 
                    onKeyUp={handleQuestionTextChange}
                    defaultValue={question.text}
                    />
            </div>
            <div className='mt-12'>
                {answerComponent()}
            </div>
        </div>
    )
}

export default QuestionContainerBuilder