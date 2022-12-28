import React, { useReducer } from "react";
import Head from "next/head";
import DropZone from "../components/DropZone";

export default function Home() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
};

  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });

  return (
    <div>
      <Head>
        <title>Drag And Drop File Upload</title>
        <meta name="description" content="Nextjs drag and drop file upload" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-gray-900 no-underline text-5xl mb-10 font-extrabold">
          Drag And Drop Files
        </h1>
        <DropZone data={data} dispatch={dispatch} />
      </main>
    </div>
  );
}
