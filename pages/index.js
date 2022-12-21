import axios from 'axios';
import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Home() {
  const [profile, setProfile] = useState()
  useEffect(()=>{
  const getProfile = async function (){
    const res = await axios.get("http://localhost:5000/profile");
    // console.log(res.data.profile)
    setProfile(res.data.profile);
    }
    getProfile()
  },[])
  return (
    <>
      <Head>
        <title>Learning Next js</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      {/* <main className=''>
      </main> */}
      {/* <h1 className='text-3xl font-bold underline'>Hello world!</h1> */}
      <div>
        {
          profile?.map((oneProfile)=>{
            console.log(oneProfile)
            return (
              <>
                <div>
                  <h1 className='text-center font-serif text-lg'>
                    Name - {oneProfile.name}
                  </h1>

                  <h1 className='text-center font-serif text-lg'>About me</h1>
                  <div className='grid grid-cols-2 '>
                    <img
                      src={oneProfile.imgUrl}
                      width='200px'
                      alt='Image'
                      className='text-center'
                    />
                    <p className=''>
                      {oneProfile.bio.massage}
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Iste similique fuga animi omnis! Possimus cum, ratione
                      perspiciatis ab inventore non debitis earum reiciendis.
                      Enim quidem et blanditiis. Minima, dolor ab.
                      <ul className='list-disc'>
                        {oneProfile.bio.skill.map((element) => {
                          return (
                            <>
                              <li>{element}</li>
                            </>
                          );
                        })}
                      </ul>
                    </p>
                  </div>
                  <hr />
                  <div className='text-center'>
                    <h1>My projects</h1>
                    <p>{(oneProfile.project).join()}</p>
                    <h1>My skills</h1>
                    <p>{Object.keys(oneProfile.skill)}</p>
                    <h1 >Services</h1>
                    <h1>{(oneProfile.services).join()}</h1>
                </div>
                </div>
              </>
            );
          })
        }
      
        
      </div>
    </>
  );
}

