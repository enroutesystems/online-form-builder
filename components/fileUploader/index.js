import {useRef} from 'react'

export default function FileUploader({onFileSelected, disabled}) {
    const uploader = useRef();

    const handleFileSelected = (e) => {
        onFileSelected(e.target.files)
    }

    return (
        <input type="file" disabled={disabled} multiple onChange={handleFileSelected} ref={uploader} name="uploadFile"/>
    )
}