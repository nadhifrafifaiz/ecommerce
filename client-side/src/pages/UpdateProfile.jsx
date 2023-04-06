import React, { useState } from "react";
import axios from "axios";

function UpdateProfile() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    let preview = document.getElementById("imagepreview");
    preview.src = URL.createObjectURL(event.target.files[0]);
  };

  const uploadImage = async () => {
    setIsLoading(true);
    if (file) {
      const obj = {
        id: 11,
      };

      let formData = new FormData();
      formData.append("file", file);
      formData.append("data", JSON.stringify(obj));

      const response = await axios.post(
        "http://localhost:8001/upload",
        formData
      );
      if (!response.error) {
        setImageSrc(`http://localhost:8001/${response.data.filepath}`);
        alert("Upload Berhasil");
      }
    } else {
      alert("Select image first");
    }
    setIsLoading(false);
  };

  return (
    <div className="w-3/4 m-auto bg-blue-200">
      <div>
        <p>Update Profile</p>

        <div>
          <p>{imageSrc}</p>
          <img id="imagepreview" width="400px" height="400px" />
          {imageSrc === "" ? null : (
            <img src={imageSrc} width="400px" height="400px" />
          )}
        </div>

        <div>
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Cover photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      type="file"
                      id="file"
                      onChange={(event) => {
                        onFileChange(event);
                      }}
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          {/* <input
            type="file"
            id="file"
            onChange={(event) => {
              onFileChange(event);
            }}
          /> */}
        </div>

        {isLoading ? (
          <button
            className="bg-green-400 px-4 py-2 rounded-md hover:bg-green-500 "
            onClick={uploadImage}
            disabled
          >
            Upload
          </button>
        ) : (
          <button
            className="bg-green-400 px-4 py-2 rounded-md hover:bg-green-500 "
            onClick={uploadImage}
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
}

export default UpdateProfile;
