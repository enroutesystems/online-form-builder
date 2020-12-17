import {useState, useRef} from 'react'
import MapBuilder from '../Map/MapBuilder'
import OptionsRadioBuilder from '../OptionsRadio/OptionsRadioBuilder'
import TextInput from '../TextInput/TextInput.viewer'
import TextArea from '../Textarea/Textarea.viewer'
import Range from '../Range/Range.builder'
import questionTypes from '../../helpers/questionTypes'
import LinkInputBuilder from '../LinkInput/LinkInput.builder'

const answerTypeOptions = Object.values(questionTypes)

const QuestionContainerBuilder = ({onQuestionChange}) => {

    const [question, setQuestion] = useState({type: questionTypes.singleLineText, text: ''})
    const selectAnswerType = useRef()

    const handleQuestionTypeChange = () => {
        const newType = selectAnswerType.current.value
        let options
        let range

        if(newType === questionTypes.multiOptions){
            options = ['', '']
        }

        if(newType === questionTypes.range)
            range = {min: 0, max: 10}

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
        const newQuestion = {...question, options: options.map(option => option.text)}

        setQuestion(newQuestion)
        onQuestionChange(newQuestion)
    }

    const handleRangeMinChange = (value) => {
        const newQuestion = {...question}
        newQuestion.range.min = +value

        setQuestion(newQuestion)
        onQuestionChange(newQuestion)
    }

    const handleRangeMaxChange = (value) => {
        const newQuestion = {...question}
        newQuestion.range.max = +value

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
                return <OptionsRadioBuilder onRadioOptions={handleRadioOptionsChange}/>

            case questionTypes.range:
                return <Range onMinChange={handleRangeMinChange} onMaxChange={handleRangeMaxChange}/>

            case questionTypes.map:
                return <MapBuilder/>

            case questionTypes.file:
                return <p>File Uploader</p>
        }
    }

    return(
        <div className='m-5'>
            <p>Select answer type:</p>
            <select className='bg-gray-200' ref={selectAnswerType} onChange={handleQuestionTypeChange}>
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
                    />
            </div>
            <div className='mt-12'>
                {answerComponent()}
            </div>
        </div>
    )
}

export default QuestionContainerBuilder