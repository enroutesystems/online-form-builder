import { useState, Component } from "react";
import { database } from "../../firebaseConfig";

export default function FileUploader() {
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");

    function handleChange(e) {
      setFile(e.target.files[0]);
    };

    function handleUpload(e) {
      e.preventDefault();
      const uploadTask = database.ref().push(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setFile(null);
            setURL(url);
          });
      });
    }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button disabled={!file}>upload to firebase</button>
      </form>
      <img src={url} alt="" />
    </div>
  )
};
