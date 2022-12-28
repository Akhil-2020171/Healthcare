import React, { useState } from "react";

const search = () => {
  const [val, setVal] = useState();
  const [isDoc, setIsDoc] = useState(false);
  const [isHos, setIsHos] = useState(false);
  const [docData, setDocData] = useState([]);
  const [hosData, setHosData] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name == "query") {
      setVal(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (val == "Doctors") {
      setIsDoc(true);
      setIsHos(false);
      ReturnDocs();
    } else if (val == "Hospitals") {
      setIsDoc(false);
      setIsHos(true);
      ReturnHosp();
    }
  };

  const ReturnDocs = async () => {

    const dataBody = {
      name: String,
      specilisation: String,
      experience: String,
    };
    let res = await fetch("api/getAlldoctors", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(dataBody),
    });

    let response = await res.json();
    if (response.success == true) {
      setDocData(response.result);
    } else {
      setDocData([]);
    }
  };

  const ReturnHosp = async () => {

    const dataBody = {
      name: String,
      location: String,
      pincode: String,
      rating: String,
    };
    let res = await fetch("api/getAllhospitals", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(dataBody),
    });

    let response = await res.json();
    if (response.success == true) {
      setHosData(response.result);
    } else {
      setHosData([]);
    }
  };

  return (
    <div>
      {isDoc ? (
        <div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Specilisation</th>
                <th className="py-3 px-4">Experience</th>
                <th className="py-3 px-4">Show</th>
              </tr>
            </thead>
            <tbody>
              {docData?.map((x) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={x.name}
                  >
                    <td>{x.name}</td>
                    <td>{x.specilisation}</td>
                    <td>{x.experience}</td>
                    <button
                      type="button"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Show
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          {isHos ? (
            <div>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="py-3 px-6">Name</th>
                    <th className="py-3 px-6">Location</th>
                    <th className="py-3 px-4">PinCode</th>
                    <th className="py-3 px-4">Rating</th>
                    <th className="py-3 px-4">Show</th>
                  </tr>
                </thead>
                <tbody>
                  {hosData?.map((x) => {
                    return (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={x.name}
                      >
                        <td>{x.name}</td>
                        <td>{x.location}</td>
                        <td>{x.pincode}</td>
                        <td>{x.rating}</td>
                        <button
                          type="button"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Show
                        </button>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-screen">
              <h1 className=" text-center text-4xl mb-4">Search</h1>
              <form action="#" method="POST" onSubmit={handleSubmit}>
                  <input
                    value={val}
                    className="border w-full p-2 focus:border-green-500 w-[450px]"
                    type="text"
                    placeholder="Enter your Query (Doctors / Hospitals)"
                    name="query"
                    onChange={handleChange}
                    required={true}
                  />
                  <button
                    type="submit"
                    className="text-md w-full p-1 bg-gray-300 rounded mt-5"
                  >
                    Search
                  </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default search;
