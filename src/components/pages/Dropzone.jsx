import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';





function DropzoneComponent(props) {
  
  const image_numbers = props.dropTitle === "Elaborates"? 30 : 1;

  const thumbsContainer = {
    // display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    // display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': [],
    },
    maxFiles: image_numbers,
    onDrop: acceptedFiles => {
      // var reader = new FileReader();
      // reader.readAsDataURL(acceptedFiles[0])
      // console.log("DDDDD",reader.result)
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <>
    { props.dropTitle === "Elaborates" ?
      <div style={thumb} key={file.name} id="ela_images">
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
            // Revoke data uri after image is loaded
            onLoad={() => { URL.revokeObjectURL(file.preview) }}
          />
        </div>
      </div>
      :
      <div className="text-center" id="cover_image">
        <img src={file.preview} className="rounded" onLoad={() => { URL.revokeObjectURL(file.preview) }} />
      </div>
    }
    </>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <div>
          <p>Drag & Drop Cover Image</p>
        </div>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}

export default DropzoneComponent;