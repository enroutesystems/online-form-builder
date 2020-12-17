// import { useState, useRef } from 'react';
//
// export default function FileUploader(props) {
//   const uploader = useRef();
//
//   function uploadFile(e) {
//     props.onFileUpload(e.target.files);
//   }
//
//   const storage = firebase.storage();
//
//   return (
//       <input type="file" multiple onChange={uploadFile} ref={uploader} name="uploadFile"/>
//   )
// }
