import React, { useEffect, useState } from 'react'
import Filters from '../components/Filters';
import axios from 'axios';
import { GetAllFilterService } from '../services/FilterService';
import { Option, Select } from '@material-tailwind/react';
function ViewNotes() {
  const [data, setData] = useState([]);
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState('');


  function handleBranchChange(val) {
    setBranch(val);

  }

  const branchData = data.find(item => item.branch === branch) || [];

  let subjects = [];
  let semData = 0
  if (branchData.length != 0 && semester) {
    semData = Object.keys(branchData.sem).find(item => item === semester)

    const l = Object.entries(branchData.sem)
    l.map(item => {
      if (item[0] == semData) {
        subjects = [...Object.values(item[1])[0]]
      }
    })

  }




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
            <div className='flex flex-col gap-6'>

              <Select variant='standard' size='lg' color='gray' label='Branch' onChange={(val) => handleBranchChange(val)}>
                {
                  data.map(item => (
                    <Option key={item._id} value={`${item.branch}`}>{item.branch}</Option>
                  ))

                }
              </Select>
              <Select variant='standard' size='lg' color='gray' label='Semester' onChange={(val) => setSemester(val)}>
                {
                  branchData.length != 0 ? Object.keys(branchData.sem).map((item) => (
                    <Option key={item} value={item}>{item}</Option>
                  )) : <Option disabled>First select a branch</Option>
                }
              </Select>
              <Select variant='standard' size='lg' color='gray' label='Subject' onChange={(val) => setSubject(val)}>
                {
                  branchData.length != 0 && semData != 0 && subjects.length != 0 ? subjects.map((item, i) => (
                    <Option key={i} value={item}>{item}</Option>
                  )) : <Option disabled>First select a semester</Option>
                }
              </Select>
            </div>
          </form>
        </section>
      </div>

    </>
  )
}

export default ViewNotes