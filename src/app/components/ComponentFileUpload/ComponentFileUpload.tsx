import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function ComponentFileUpload() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const fileList = files.map((file, index) => (
    <li key={index}>
      {file.name} - {file.size} bytes - {file.type}
    </li>
  ));

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>ここにドロップしてください ...</p> :
          <p>ファイルをドラッグ＆ドロップするか、クリックして選択してください</p>
      }
      {files.length > 0 && (
        <div>
          <h4>アップロード予定のファイル:</h4>
          <ul>{fileList}</ul>
        </div>
      )}
    </div>
  );
}

const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default ComponentFileUpload;
