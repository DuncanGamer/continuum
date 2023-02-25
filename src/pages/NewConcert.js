import React, { useEffect } from "react";
import Market1 from "../components/Market1";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePostContext } from "../Context/concertsContext";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useState } from "react";

const NewConcert = () => {
  const { postConcert, getConcert } = usePostContext();
  const navigate = useNavigate();
  const params = useParams();
  const [concert, setConcert] = useState({
    concertName: "",
    artist: "",
    date: "",
    place: "",
    price: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const concert = await getConcert(params.id);
        setConcert(concert);
      } else {
        setConcert({
          concertName: "",
          artist: "",
          date: "",
          place: "",
          price: "",
          description: "",
          image: null,
        });
      }
    })();
  }, [params.id]);

  return (
    <>
      <div className=" px-4  ">
        <div className=" pt-10 container block h-auto lg:pt-32">
          <div className="mt-10">
          <Market1
            Titulo1="Simplier."
            Titulo2="Happier."
            Titulo3=" Better concerts."
            Paragraph=" "
          />
          </div>
          <div className=" container   flex flex-col lg:flex-row items-center mx-auto  ">
            <div className=" mx-auto w-full lg:w-1/2 mt-14 ">
              <div className="  mb-4 font-3xl"> Create your concert</div>
              <Formik
                initialValues={concert}
                validationSchema={Yup.object({
                  concertName: Yup.string().required(
                    "Concert name is required"
                  ),
                  artist: Yup.string().required("Artist is required"),
                  date: Yup.string().required("Date is required"),
                  place: Yup.string().required("Place is required"),
                  price: Yup.string().required("Price is required"),
                  description: Yup.string()
                    .required("Description is required")
                    .min(10, "Description must be at least 10 characters"),
                })}
                onSubmit={async (values, actions) => {
                  await postConcert(values);
                  navigate("/ConcertForm");
                }}
                enableReinitialize={true}
              >
                {({ handleSubmit, setFieldValue }) => (
                  <Form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-y-5  w-full lg:w-4/5 mb-10"
                  >
                    <Field
                      name="concertName"
                      type="text"
                      placeholder="Concert Name"
                      className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in"
                    />

                    <ErrorMessage
                      name="concertName"
                      component="p"
                      className=" text-red-500"
                    />
                    <Field
                      name="artist"
                      type="text"
                      placeholder="Artist"
                      className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in"
                    />

                    <ErrorMessage
                      name="artist"
                      component="p"
                      className=" text-red-500"
                    />
                    <Field
                      name="date"
                      type="text"
                      placeholder="Date"
                      className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in"
                    />
                    <ErrorMessage
                      name="date"
                      component="p"
                      className=" text-red-500"
                    />
                    <Field
                      name="place"
                      type="text"
                      placeholder="Place"
                      className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in"
                    />
                    <ErrorMessage
                      name="place"
                      component="p"
                      className=" text-red-500"
                    />
                    <Field
                      name="price"
                      type="text"
                      placeholder="Price"
                      className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in"
                    />
                    <ErrorMessage
                      name="price"
                      component="p"
                      className=" text-red-500"
                    />
                    <Field
                      name="description"
                      component="textarea"
                      placeholder="Description"
                      className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in"
                    />
                    <ErrorMessage
                      name="description"
                      component="p"
                      className=" text-red-500"
                    />
                    <label htmlFor="image"> image</label>
                    <input
                      type="file"
                      name="image"
                      onChange={(e) => {
                        setFieldValue("image", e.target.files[0]);
                      }}
                      className="focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in "
                    />
                    <button
                      type="submit"
                      className=" w-2/3 px-5 py-3 rounded-xl shadow-lg hover:shadow-md  shadow-blue-700  bg-blue-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold transition duration-300 ease-out hover:ease-in"
                    >
                      Save
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewConcert;
