import React from "react";

const UploadButton = () => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Uploaded: ${file.name}`);
    }
  };

  return (
    <div>
      <input
        type="file"
        id="file-upload"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <label htmlFor="file-upload" style={{ padding: "10px", background: "blue", color: "white", cursor: "pointer" }}>
        Upload File
      </label>
    </div>
  );
};

export default UploadButton;
