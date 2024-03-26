import { Button, Card, Input, Option, Select, Typography } from '@material-tailwind/react'
import React from 'react'

function Catalog() {
  return (
    <>
      <div>
        <div className='container mx-auto px-4 bg-white'>
          <div className=''>
            <header className='flex items-center justify-center'>
              <h1 className='text-3xl lg:text-4xl text-center font-semibold underline'>
                Add products  to your catalog here.
              </h1>
            </header>
            <section className='flex items-center justify-center mt-16 mb-28 '>
              

                <form className='mt-4 mb-2  max-w-screen-lg w-full sm:w-96'>
                  <div className='flex flex-col gap-6'>
                    <Input variant='standard' size='lg' color='gray' label='Product Name' placeholder='eg.Poha' className='' />
                    <Input variant='standard' size='lg' color='gray' label='Product Price' placeholder='eg. 100' />
                    <Select variant='standard' size='lg' color='gray' label='Product Category'>
                      <Option>Food</Option>
                      <Option>Beverage</Option>
                      <Option>Sweets</Option>
                      <Option>Dairy</Option>
                    </Select>
                  </div>
                  <Button color='black' className="mt-8" fullWidth>Add to catalog</Button>
                </form>
              
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalog