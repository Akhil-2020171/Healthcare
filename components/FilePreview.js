import React from "react";

const FilePreview = ({ fileData }) => {
  return (
    <div className="flex mt-5 justify-center items-center">
        
        {fileData.fileList.map((f) => {
          return (
              <ol key={f.lastModified}>
                <li className="flex mt-4 gap-4 w-full">
                  <div key={f.name} className="text-xl font-semibold">
                    {f.name}
                  </div>
                </li>
              </ol>
          );
        })}
    </div>
  );
};

export default FilePreview;
