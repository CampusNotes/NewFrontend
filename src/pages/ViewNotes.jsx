import React, { useEffect, useState } from 'react'
import Filters from '../components/Filters';
import axios from 'axios';
import { GetAllFilterService } from '../services/FilterService';
import { Option, Select } from '@material-tailwind/react';
function ViewNotes() {
  const [data, setData] = useState([]);
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  useEffect(() => {

    GetAllFilterService()
      .then(res => {
        console.log(res);
        if (res.length != 0) {
          setData(res)
        }
      })
      .catch(error => {
        console.log(error);
      })
  }, [])
  return (
    <>
      <div className='container mx-auto px-4'>
        <section className='flex flex-col items-center justify-center '>
          <header className='flex items-center justify-center'>
            <h1 className='text-2xl lg:text-3xl text-center font-semibold underline'>
              Search notes.
            </h1>
          </header>
          <form className='mt-16 mb-28  max-w-screen-lg w-full sm:w-96 '>
            <Select variant='standard' size='lg' color='gray' label='Branch' value={branch} onChange={(val) => setBranch(val)}>
              {
                data.map(item => (
                  <Option key={item._id} value={item.branch}>{item.branch}</Option>
                ))
              }
            </Select>
            <Select variant='standard' size='lg' color='gray' label='Semester' value={semester} onChange={(val) => setSemester(val)}>
              {
                data.map(item => (
                  <Option key={item._id} value={item.branch}>{item.branch}</Option>
                ))
              }
            </Select>
          </form>
        </section>
      </div>

    </>
  )
}

export default ViewNotes