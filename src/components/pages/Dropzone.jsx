import React, { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

let files;

function DropzoneComponent(props) {

  const handleUpload = () => {
    console.log("upload")
  }

  const onDrop = useCallback(acceptedFiles => {
    files = acceptedFiles;
    console.log("hello",acceptedFiles);
    console.log("goodbye",files);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png'
  });

  const style = useMemo(() => ({
    // ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  return (
    <>
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <div className='text-white'>Drag and drop your images here.</div>
      </div>
      <div>
        <ul className="mt-2">
          {files && files.length > 0 && files.map(acceptedFile => (
            <li key={acceptedFile.key} className="btn btn-success btn-sm">
              {acceptedFile.name}
            </li>
          ))}
        </ul>
      </div>
      <div className='text-center'>
        <button className='btn btn-success' onClick={handleUpload}>Upload</button>
      </div>
    </>
  )
}

export default DropzoneComponent;