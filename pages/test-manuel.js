import QuestionContainerViewer from '../components/QuestionContainer/QuestionContainerViewer'
import QuestionContainerBuilder from '../components/QuestionContainer/QuestionContainerBuilder'
import questionTypes from '../helpers/questionTypes'
import 'firebase/storage'
import firebase from '../firebaseConfig.client'
import FileUploader from '../components/fileUploader'

const question = {
    text: 'Hola jeje', 
    type: questionTypes.map,
    minValue: 5,
    maxValue: 20,
    number: 1,
    options: [{text: 'Sí', optionAnswerId: '9w8r48wrg'}, {text: 'No', optionAnswerId: '4br89thbr'}]
}

const Prueba = () => {

    const handleFileSelected = async(files) => {
        const urls = []
        const storageRef = firebase.storage().ref()

        for(let i = 0; i < files.length; i++){

            const snapshot = await storageRef.child('' + Date.now() + files[i].name).put(files[i])
            urls.push(await (await snapshot.task).ref.getDownloadURL())
        }

        console.log(urls)
    }

    return(
        <div>
            <QuestionContainerViewer formId='we1f6ewf4w64gwe5' question={{cardColor:'blue', type:'file', text: 'Mi Pregunta'}} onAnswerSelected={(value) => console.log(value)}/>
        </div>
    )
}

export default Prueba