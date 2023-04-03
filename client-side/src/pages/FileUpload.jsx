import React, { useState } from "react";
import axios from "axios";
function FileUpload() {
  const [file, setFile] = useState(null);

  const onBtnAdd = async () => {
    if (file) {
      alert("tes");
      let formData = new FormData();
      console.log(file);
      formData.append("file", file);
      console.log(formData);
      let res = await axios.post("http://localhost:8001/upload", formData);
      console.log(res);
    }
  };
  return (
    <div>
      <div>
        <img id="imgpreview" />
      </div>
      <input
        type="file"
        id="file"
        onChange={(event) => {
          const file = event.target.files;
          console.log(file[0]);
          setFile(file[0]);
          let preview = document.getElementById("imgpreview");
          preview.src = URL.createObjectURL(file[0]);
        }}
      />
      <button onClick={onBtnAdd}>add</button>
    </div>
  );
}

export default FileUpload;
