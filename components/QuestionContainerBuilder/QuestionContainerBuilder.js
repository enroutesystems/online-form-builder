import {useState, useRef} from 'react'

const answerTypes = ['text-response', 'multiple-options', 'range', 'map']

const QuestionContainerBuilder = () => {

    const [answerType, setAnswerType] = useState('text-response')
    const selectAnswerType = useRef()

    const handleSelectChange = () => setAnswerType(selectAnswerType.current.value)

    const answerComponent = () => {

        switch(answerType){
            case answerTypes[0]:
                return <p>TextResponseComponent</p>

            case answerTypes[1]:
                return <p>MultipleOptionsComponent</p>

            case answerTypes[2]:
                return <p>RangeComponent</p>

            case answerTypes[3]:
                return <p>MapComponent</p>
        }
    }

    return(
        <div>
            <input type='text' placeholder='Your question here...' />

            Select type of answer:
            <select ref={selectAnswerType} onChange={handleSelectChange}>
                <option value={answerType[0]}>Text response</option>
                <option value={answerTypes[1]}>Multiple Options</option>
                <option value={answerTypes[2]}>Range</option>
                <option value={answerTypes[3]}>Map</option>
            </select>

            {answerComponent()}
        </div>
    )
}

export default QuestionContainerBuilder