import {useState, useRef} from 'react'
import MapBuilder from '../Map/MapBuilder'
import OptionsRadioBuilder from '../OptionsCheckbox/OptionsCheckboxBuilder'
import TextArea from '../Textarea'
import questionTypes from '../../helpers/questionTypes'

const answerTypeOptions = ['text-response', 'multiple-options', 'range', 'map']

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
        }
    }

    return(
        <div>
            Select type of answer:
            <select ref={selectAnswerType} onChange={handleSelectChange}>
                <option value={questionTypes.text}>Text response</option>
                <option value={questionTypes.multiOptions}>Multiple Options</option>
                <option value={questionTypes.range}>Range</option>
                <option value={questionTypes.map}>Map</option>
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