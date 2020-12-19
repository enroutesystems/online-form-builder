import QuestionContainerBuilder from '../components/QuestionContainer/QuestionContainerBuilder'

const Prueba = () => {

    return(
        <div>
            
            <RangeBuilder minValue={20} maxValue={50} onMinChange={(res) => console.log(res)} onMaxChange={(res) => console.log(res)}/>
        </div>
    )
}

export default Prueba