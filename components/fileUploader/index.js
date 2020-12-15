import { storageRef } from "../../firebaseConfig";
import { useState, useRef } from 'react';

export default function FileUploader() {
  const uploader = useRef();

  function uploadFile() {
    const file = uploader.current.files[0];
    const name = `${+new Date()}-${file.name}`;
    const metadata = {
      contentType: file.type
    };
    const task = storageRef.child(name).put(file, metadata);
  }

  return (
    <>
      <input type="file" ref={uploader} name="uploadFile"/>
      <button onClick={uploadFile}>upload to firebase</button>
    </>
  )
}
