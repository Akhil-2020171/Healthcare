import React, { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import fs from "fs"

const DeletePage = () => {
  const [token, setToken] = useState();
  const [userData, setUserData] = useState([]);
  
  var decodeData = {};

  if (token) {
    decodeData = jwt_decode(token.toString());
  }

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const Email = decodeData.email;

  const Files = async () => {

    const dataBody = {
      email: Email,
    };

    let res = await fetch("/api/getAllFiles", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(dataBody),
    });

    let response = await res.json();
    if (response.success == true) {
      setUserData(response.result);
    } else {
      setUserData([]);
    }
  };

  const Delete = async (file) => {
    const dataBody = {
      file: file,
    };
    let res = await fetch("/api/deleteFiles", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(dataBody),
    });

    let response = await res.json();
    console.log(response);
    if(response.success==true){
      // delete file
      // fs.unlinkSync(`/home/iiitd/ayush/healtcare/public/files/${file}`, function (err) {
      //   if (err) throw err;
      //   console.log('File deleted!');
      // });
    };
  };

  const onButtonClick = (File) => {
    // using Java Script method to get file
    fetch(`/home/iiitd/ayush/healtcare/public/files/${File}`).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of file
        const fileURL = window.URL.createObjectURL(blob); // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = File;
        alink.click();
      });
    });
  };

  useEffect(() => {
    Files();
  }, []);

  return (
    <div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="py-3 px-6">Files</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((x) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={x.email}
              >
                <td>{x.file}</td>
                <button
                  type="button"
                  onClick={() => Delete(x.file)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => onButtonClick(x.file)}
                >
                  {" "}
                  Download
                </button>{" "}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DeletePage;