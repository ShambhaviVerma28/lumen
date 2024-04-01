import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const FileAndCameraSelection: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [cameraImage, setCameraImage] = useState<string | null>(null);

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const handleCameraPhoto = (dataUri: string) => {
    setCameraImage(dataUri);
  };

  return (
    <div>
      <div>
        <label htmlFor="fileInput">Select a file:</label>
        <input type="file" id="fileInput" onChange={handleFileInputChange} />
      </div>
      {file && (
        <div>
          <h3>Selected file:</h3>
          <p>Name: {file.name}</p>
          <p>Size: {file.size} bytes</p>
          <p>Type: {file.type}</p>
        </div>
      )}
      <Camera onTakePhoto={handleCameraPhoto} />
      {cameraImage && (
        <div>
          <h3>Camera photo:</h3>
          <img src={cameraImage} alt="Camera Photo" />
        </div>
      )}
    </div>
  );
};

export default FileAndCameraSelection;