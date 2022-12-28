import React, { useState , useEffect} from "react";
import FilePreview from "./FilePreview";
import {AiOutlineCloudUpload} from 'react-icons/ai'
import jwt_decode from 'jwt-decode';
import { useRouter } from "next/router";

const DropZone = ({ data, dispatch }) => {
  const router = useRouter();
  const [token, setToken] = useState("");

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    
    e.dataTransfer.dropEffect = "copy";
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    
    let files = [...e.dataTransfer.files];

    
    if (files && files.length > 0) {
      
      const existingFiles = data.fileList.map((f) => f.name);
      
      
      files = files.filter((f) => !existingFiles.includes(f.name));

      
      dispatch({ type: "ADD_FILE_TO_LIST", files });
      
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    }
  };

  
  const handleFileSelect = (e) => {
    
    let files = [...e.target.files];

    
    if (files && files.length > 0) {
      
      const existingFiles = data.fileList.map((f) => f.name);
      
      
      files = files.filter((f) => !existingFiles.includes(f.name));

      
      dispatch({ type: "ADD_FILE_TO_LIST", files });
    }
  };

  if (typeof window !="undefined") {
    useEffect(() => {
      setToken(localStorage.getItem("token"));
    }, [localStorage.getItem("token")]);
  }

  var decodeData = {};
  if (token) {
    decodeData = jwt_decode(token.toString());
  }

  
  const uploadFiles = async () => {
    
    let files = data.fileList;
    
    const formData = new FormData();
    
    files.forEach((file) => formData.append("files", file));

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    
    let res = await response.json();
    if (res.done==true) {
      alert("Files uploaded successfully");

      const dataBody = {
        email: decodeData.email,
        file: res.File,
      };

      const response1 = await fetch("/api/userFiles", {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify(dataBody),
      });

      const res1 = await response1.json();
      console.log(res1.success);
      setTimeout(() => {
        router.push("/upload");
      }, 2000);
    } else {
      alert("Error uploading files");
    }
  };

  return (
    <>
      <div
        className="flex flex-col justify-center items-center border-dashed border-4 border-gray-500 rounded-2xl p-8"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      >
        <AiOutlineCloudUpload className="text-5xl text-green-400"/>

        <input
          id="fileSelect"
          type="file"
          multiple
          className="border-0 h-1 overflow-hidden p-0 absolute whitespace-nowrap w-px"
          onChange={(e) => handleFileSelect(e)}
        />
      </div>
      <label htmlFor="fileSelect" className="bg-gray-200 p-2 m-4 mt-6 rounded-lg hover:bg-gray-300">Select File</label>
      {/* Pass the selectect or dropped files as props */} 
      <FilePreview className="flex justify-center items-center" fileData={data} />
      {/* Only show upload button after selecting atleast 1 file */}
      {data.fileList.length > 0 && (
        <button className="cursor-pointer m-8 p-3 text-center text-white uppercase w-auto rounded-2xl bg-blue-400 hover:bg-blue-500" onClick={uploadFiles}>
          Upload
        </button>
      )}
    </>
  );
};

export default DropZone;
