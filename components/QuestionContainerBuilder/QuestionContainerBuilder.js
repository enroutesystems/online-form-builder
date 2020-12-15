import {useState, useRef} from 'react'
import MapBuilder from '../Map/MapBuilder'
import OptionsRadioBuilder from '../OptionsCheckbox/OptionsCheckboxBuilder'
import TextArea from '../Textarea'
import questionTypes from '../../helpers/questionTypes'

const answerTypeOptions = Object.values(questionTypes)

const QuestionContainerBuilder = () => {

    const [answerType, setAnswerType] = useState('text-response')
    const selectAnswerType = useRef()

    const handleSelectChange = () => setAnswerType(selectAnswerType.current.value)

    const answerComponent = () => {

        switch(answerType){
            case questionTypes.text:
                return <TextArea />

            case questionTypes.multiOptions:
                return <OptionsRadioBuilder />

            case questionTypes.range:
                return <p>RangeComponent</p>

            case questionTypes.map:
                return <MapBuilder/>

            case questionTypes.file:
                return <p>File component</p>
        }
    }

    return(
        <div>
            Select type of answer:
            <select ref={selectAnswerType} onChange={handleSelectChange}>
                {answerTypeOptions.map((option, id) => (
                    <option value={option} key={id + option}>{option}</option>
                ))}
            </select>
            <br/>
            <br/>
            <div>
                <input type='text' placeholder='Your question here...' />
            </div>

            {answerComponent()}
        </div>
    )
}

export default QuestionContainerBuilder