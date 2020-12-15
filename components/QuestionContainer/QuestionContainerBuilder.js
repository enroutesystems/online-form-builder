import {useState, useRef} from 'react'
import MapBuilder from '../Map/MapBuilder'
import OptionsRadioBuilder from '../OptionsCheckbox/OptionsCheckboxBuilder'
import TextInput from '../TextInput'
import TextArea from '../Textarea'
//import FileUploader from '../fileUploader'
import questionTypes from '../../helpers/questionTypes'

const answerTypeOptions = Object.values(questionTypes)

const QuestionContainerBuilder = () => {

    const [answerType, setAnswerType] = useState(questionTypes.input)
    const selectAnswerType = useRef()

    const handleSelectChange = () => setAnswerType(selectAnswerType.current.value)

    const answerComponent = () => {

        switch(answerType){
            case questionTypes.singleLineText:
                return <TextInput />

            case questionTypes.multipleLineText:
                return <TextArea />

            case questionTypes.url:
                return <p>LINK component</p>

            case questionTypes.multiOptions:
                return <OptionsRadioBuilder />

            case questionTypes.range:
                return <p>RangeComponent</p>

            case questionTypes.map:
                return <MapBuilder/>

            case questionTypes.file:
                return <p>File Uploader</p>
        }
    }

    return(
        <div>
            <p>Select answer type:</p>
            <select className='bg-gray-200' ref={selectAnswerType} onChange={handleSelectChange}>
                {answerTypeOptions.map((option, id) => (
                    <option value={option} key={id + option}>{option}</option>
                ))}
            </select>
            <div className='mt-1 mb-5'>
                <input className='bg-transparent border-b border-black w-full py-3 placeholder:text-black' type='text' placeholder='Your question here...' />
            </div>
            <div>
                {answerComponent()}
            </div>
        </div>
    )
}

export default QuestionContainerBuilder