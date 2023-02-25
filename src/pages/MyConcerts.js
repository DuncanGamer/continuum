import toast from "react-hot-toast";
import Baner from "../components/Baner";
import { usePostContext } from "../Context/concertsContext";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";




const MyConcerts = () => {
  
  const Navigate = useNavigate();
  const params = useParams();
  const getConcert = usePostContext();

    useEffect(() => {
    window.scrollTo(0, 0);
    if (params.id) {
    getConcert(params.id);
    }
  }, []);

  const { userConcert, deleteConcert } = usePostContext();

  if (!userConcert) {
    return <div>There are no concerts yet </div>;
  }

  const handleDelete = (_id, concertName) => {
    toast((t) => (
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold">
          Do you want to delete?<br></br>
          <strong>{concertName}</strong>
        </div>
        <div className="text-gray-500">
          You can't undo this action afterwards.
        </div>
        <div className="flex gap-4 mt-4">
          <button
            className="px-4 py-2 rounded-md bg-red-500 text-white"
            onClick={() => deleteConcert(_id)}
          >
            Delete
          </button>
          <button
            className="px-4 py-2 rounded-md bg-green-500 text-white"
            onClick={(t) => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div key={new Date().getTime()} className=" w-screen  ">
        <div className=" container mx-auto  overflow-x-auto   flex md:overflow-visible  px-6 py-6 ">
          <div className=" h-auto  px-6 py-6 shrink-0 mx-auto mt-48 snap-center flex sm:grid  content-center  md:grid-cols-3  lg:grid-cols-3  ">
            {userConcert.map(
              ({
                _id,
                concertName,
                artist,
                date,
                place,
                price,
                image,
                description,
              }) => (
                <div key={_id} className="  gap-5 px-6 py-6 ">
                  <div className="  shrink-0 snap-center w-full flex flex-col md:flex  rounded-lg hover:shadow-xl shadow-md shadow-gray-500/50 transition duration-300 ease-out hover:ease-in bg-white">
                    <div className="flex justify-center">
                      <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        {image && image.url ? (
                          <img className="" src={image.url} alt="image" />
                        ) : null}
                        {/* <img className="" src={image.url} alt="image" /> */}

                        <div className="p-6">
                          <h5 className="text-gray-900 text-xl font-medium mb-2">
                            {concertName} {artist}
                          </h5>
                          <p className="text-gray-700 text-base mb-4">
                            Date: {date} <br></br>Place: {place}
                            <br></br>
                            {description}
                            <br></br> Price: {price}
                          </p>
                          <p className="text-gray-700 text-base mb-4"></p>
                          <div className="flex justify-center gap-6">
                            <button
                              onClick={() =>
                                Navigate(`/concerts/update/${_id}`)
                              }
                              type="button"
                              className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              update
                            </button>
                            <button
                              onClick={() => handleDelete(_id, concertName)}
                              type="button"
                              className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              delete
                            </button>
                            <button
                              type="button"
                              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              info
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

       
      </div> 
      <Baner />
    </div>
  );
};

export default MyConcerts;
