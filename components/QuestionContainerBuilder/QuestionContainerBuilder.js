import {useState, useRef} from 'react'
import MapBuilder from '../MapBuilder'

const answerTypeOptions = ['text-response', 'multiple-options', 'range', 'map']

const QuestionContainerBuilder = () => {

    const [answerType, setAnswerType] = useState('text-response')
    const selectAnswerType = useRef()

    const handleSelectChange = () => setAnswerType(selectAnswerType.current.value)

    const answerComponent = () => {

        switch(answerType){
            case answerTypeOptions[0]:
                return <p>TextResponseComponent</p>

            case answerTypeOptions[1]:
                return <p>MultipleOptionsComponent</p>

            case answerTypeOptions[2]:
                return <p>RangeComponent</p>

            case answerTypeOptions[3]:
                return <MapBuilder/>
        }
    }

    return(
        <div>
            Select type of answer:
            <select ref={selectAnswerType} onChange={handleSelectChange}>
                <option value={answerTypeOptions[0]}>Text response</option>
                <option value={answerTypeOptions[1]}>Multiple Options</option>
                <option value={answerTypeOptions[2]}>Range</option>
                <option value={answerTypeOptions[3]}>Map</option>
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