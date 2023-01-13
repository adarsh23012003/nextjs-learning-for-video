import React from "react";
import Head from "next/head";
import Input from "../hook/input";
import axios from "axios";

export default function contact() {
  const email = Input("");
  const name = Input("");
  const massage = Input("");
  const phone = Input("");

  const send = async function () {
    try {
      // console.log("function called");
      const res = await axios.post("http://localhost:5000/forms/form", {
        email: email.value,
        name: name.value,
        massage: massage.value,
        phone: phone.value,
      });
      console.log(res.data);
     
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = async function (event) {
    event.preventDefault();
    send();
    name.onSubmit,
    email.onSubmit
    massage.onSubmit;
  };
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <div>
        <h1 className='font-bold text-4xl center p-2 '>Contact page</h1>
        <div className='sm:mx-60 lg:mx-96 md:mx-40'>
          <form>
            <div className='text-left'>
              <label className='form-label inline-block mb-2 text-gray-700'>
                Enter your name
              </label>
              <input
                onChange={name.onchange}
                value={name.value}
                name='name'
                type='text'
                className='form-control block
                focus:ring-2
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='Enter name'
              />
            </div>

            <div className='text-left pb-5'>
              <label
                htmlFor='exampleInputEmail1'
                className='form-label inline-block mb-2 mt-4 text-gray-700'
              >
                Email address
              </label>
              <input
                onChange={email.onchange}
                value={email.value}
                name='email'
                type='email'
                className='form-control
                text-left
              block
              focus:ring-2
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='Enter email'
              />
            </div>

            <div className='text-left pb-5'>
              <label
                htmlFor='exampleInputEmail1'
                className='form-label inline-block mb-2 text-gray-700'
              >
                phone
              </label>
              <input
                onChange={phone.onchange}
                value={phone.value}
                name='phone'
                type='phone'
                className='form-control
                text-left
              block
              focus:ring-2
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='Enter phone Number'
              />
            </div>

            <div className='text-left'>
              <label className='form-label inline-block mb-2 text-gray-700'>
                Massage
              </label>
              <input
                onChange={massage.onchange}
                value={massage.value}
                name='massage'
                type='text'
                className='form-control block
              w-full
              px-3
              focus:ring-2
              py-6
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='Enter some massage'
              />
            </div>

            <button
              onClick={submitForm}
              type='submit'
              className='bg-black text-white text-xs rounded-md p-1.5 font-normal flex justify-start mt-5'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
