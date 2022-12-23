import Head from 'next/head';
import React from 'react'



export default function About() {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <div>
        <h1 className='font-bold text-3xl center p-5'>About Hunting Coder</h1>
        <div className='flex mx-40'>
          <h2 className='font-bold text-2xl flex text-left pb-3'>
            Introduction
          </h2>
        </div>
        <p className='flex mx-40 text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          dolor omnis? Quia cumque perferendis blanditiis voluptas consequatur
          ut et modi ducimus. Ab ullam iure laudantium ipsum quisquam similique
          consequuntur nemo reprehenderit. Odit consequuntur numquam eveniet
          quaerat dignissimos a repellendus? Expedita enim doloremque aspernatur
          iste dicta necessitatibus cupiditate totam error debitis.
        </p>
        <h2 className='font-bold text-2xl flex text-left pb-3 pt-3 mx-40'>
          Services Provided
        </h2>
        <p className='flex mx-40 text-left'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          autem repellat, ex nostrum fugiat commodi quos! Omnis neque veritatis
          vero iste libero excepturi veniam recusandae. We offer the following
          services
        </p>
        <ul className='mx-44 text-left list-disc'>
          <li>Service1</li>
          <li>Service2</li>
          <li>Service3</li>
          <li>Service4</li>
          <li>Service5</li>
        </ul>
        <h2 className='font-bold text-2xl flex text-left pb-3 pt-3 mx-40'>
          Contact us
        </h2>
        <p className='flex mx-40 text-left'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          autem repellat, ex nostrum fugiat commodi quos! Omnis neque veritatis
          vero iste libero excepturi veniam recusandae. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolorem, dolor omnis? Quia cumque
          perferendis blanditiis voluptas consequatur ut et modi ducimus. Ab
          ullam iure laudantium ipsum quisquam similique consequuntur nemo
          reprehenderit. Odit consequuntur numquam eveniet quaerat dignissimos a
          repellendus? Expedita enim doloremque aspernatur iste dicta
          necessitatibus cupiditate totam error debitis.
        </p>
      </div>
    </>
  );
}
