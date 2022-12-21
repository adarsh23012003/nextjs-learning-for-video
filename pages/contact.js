import React from "react";
import Head from "next/head";
import Input from "../hook/input";
import axios from "axios";

export default function contact() {
  const email = Input("");
  const name = Input("");
  const massage = Input("");

  const send = async function () {
    try {
      // console.log("function called");
      const res = await axios.post("http://localhost:5000/forms/form", {
        email: email.value,
        name: name.value,
        massage: massage.value,
      });
      console.log(res.data);
     
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = async function (event) {
    //  alert(`Email = ${email.value},name = ${name.value},massage = ${massage.value}`)
    event.preventDefault();
    send();
    name.onSubmit,
    email.onSubmit
    massage.onSubmit;
    // name = "",
    // massage = ""
  };
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <div className='text-center font-mono font-bold text-lg m-5'>
        {" "}
        Give feedback
      </div>
      <div>
        <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm'>
          <form>
            <div className='form-group mb-6'>
              <label
                htmlFor='exampleInputEmail1'
                className='form-label inline-block mb-2 text-gray-700'
              >
                Email address
              </label>
              <input
                onChange={email.onchange}
                value={email.value}
                name='email'
                type='email'
                className='form-control
              block
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
            <div className='form-group mb-6'>
              <label className='form-label inline-block mb-2 text-gray-700'>
                name
              </label>
              <input
                onChange={name.onchange}
                value={name.value}
                name='name'
                type='text'
                className='form-control block
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
                placeholder='name'
              />
            </div>

            <div className='form-group mb-6'>
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
              py-6
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
                placeholder='Enter some massage'
              />
            </div>

            <button
              onClick={submitForm}
              type='submit'
              className='
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
