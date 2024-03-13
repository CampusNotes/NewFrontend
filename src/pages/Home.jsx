import { Button } from '@material-tailwind/react'
import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import reciept from '../assets/pexels-karolina-grabowska-4959907.jpg'
import { BeakerIcon, LockClosedIcon } from '@heroicons/react/24/outline'

function Home() {
  return (
    <>
      <div className=''>
        <Header />
        <div className='w-full'>
          <section className='mt-14 lg:mt-16'>
            <div className='container mx-auto flex flex-col items-center justify-center gap-8 px-8 py-12'>
              <div>
                <h1 className='text-4xl lg:text-5xl font-extrabold font-outfit bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600 inline-block py-4 text-transparent bg-clip-text text-center tracking-wider'>
                  Streamline Your Restaurant&apos;s Billing Process with Billify
                </h1>
              </div>
              <div className='mt-4'>
                <p className='font-outfit font-light tracking-wider text-center text-sm lg:text-lg'>Billify is an innovative online billing platform designed specifically for restaurant owners. It simplifies the billing process by digitizing and automating every aspect, from order entry to payment collection</p>
              </div>
              <div>
                <Button variant='gradient'>Get Started !</Button>

              </div>
            </div>
          </section>
          <section className='px-4 py-8 '>
            <div className='container mx-auto grid grid-cols-3 gap-6'>
              <div className='col-span-2  bg-black rounded-xl p-6'>
                <div className='flex flex-col lg:flex-row'>
                  <div className='w-full lg:w-[60%]'>
                    <h2 className='text-white text-xl font-outfit font-semibold tracking-wider uppercase'>
                      Effortless Bill Creation
                    </h2>
                    <ul className='mt-4'>
                      <li className='text-white font-outfit font-light tracking-wide'>Quickly generate bills with a few clicks.</li>
                      <li className='text-white font-outfit font-light tracking-wide'>Input order details seamlessly for accurate billing.</li>
                    </ul>
                  </div>
                  <div className='w-full hidden lg:block lg:w-[40%]'>
                    <img src={reciept} alt="" className='w-full h-auto rounded-xl' />
                  </div>
                </div>
              </div>
              <div className='bg-black rounded-xl p-6 flex flex-col gap-2'>
                <div className='flex items-center justify-end'>
                  <LockClosedIcon className='h-14 text-white' />
                </div>
                <div>
                  <h2 className='text-white text-3xl font-outfit font-semibold tracking-widest uppercase'>
                    Secure and Reliable
                  </h2>
                </div>

              </div>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 col-span-3'>
                <div className='bg-black rounded-xl p-6 col-span-2 flex flex-col items-center justify-center'>


                  <h2 className='text-white text-xl font-outfit font-semibold tracking-wider uppercase'>
                    Effortless Bill Creation
                  </h2>
                  <div className='mt-4'>
                    <p className='text-white font-outfit font-light text-lg text-center tracking-wider'>
                      Access Billify from any device with an internet connection.
                      Manage billing operations both on-site and remotely for convenience.
                    </p>
                  </div>


                </div>
                <div className='bg-black rounded-xl p-6 flex items-center justify-center'>
                  <h2 className='text-white text-3xl font-outfit font-semibold tracking-wider capitalize'>QR code accessible bills</h2>
                </div>
                <div className='bg-black rounded-xl p-6 flex flex-col gap-4'>
                  <h2 className='text-white text-xl font-outfit font-semibold tracking-wider capitalize'>Want to know more</h2>
                  <Button color='white'>Read more</Button>
                </div>
              </div>



            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home