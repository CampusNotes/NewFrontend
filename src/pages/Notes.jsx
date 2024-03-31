import React, { useEffect, useState } from 'react'
import Dropzone from '../components/Dropzone';
import { Button, Input, Option, Select, Typography } from '@material-tailwind/react';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import Notify from '../helpers/Notify';
import NotesCard from '../components/NotesCard';

function Notes() {
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState('');
  const [publication, setPublication] = useState('');
  const [file, setFile] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([]);

  function clearData() {
    setBranch('')
    setSemester('')
    setPublication('')
    setSubject('')
    setFile([])
  }

  function handleSubmit(e) {
    e.preventDefault();

    const fromdata = new FormData();
    fromdata.append('branch', branch)
    fromdata.append('semester', semester)
    fromdata.append('subject', subject)
    fromdata.append('publicationName', publication)
    fromdata.append('file', file[0])
    const headers = {
      "Content-Type": "multipart/form-data",
      auth_token: localStorage.getItem('auth_token')
    }
    setIsLoading(true)
    axios.post('/api/file/upload', fromdata, {
      headers
    })
      .then(response => {
        console.log(response);
        if (response.status === 201) {
          console.log(response.data.data.filesaved);
          Notify('success', 'Notes added successfully');
          setIsLoading(false)
          clearData()

        }
        else {
          Notify('error', 'Cannot upload notes, please try again later!')
          setIsLoading(false)
        }
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false)
      })



  }

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      auth_token: localStorage.getItem('auth_token')
    }
    axios.get('/api/file/allfiles', { headers })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setData(res.data.data.files)
        }
        else {
          setData([])
        }
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <div>
        <div className='container mx-auto px-4'>

          <section className='flex flex-col items-center justify-center '>
            <header className='flex items-center justify-center'>
              <h1 className='text-2xl lg:text-3xl text-center font-semibold underline'>
                Add your notes here.
              </h1>
            </header>
            <form className='mt-16 mb-28  max-w-screen-lg w-full sm:w-96 ' onSubmit={(e) => handleSubmit(e)}>
              <div className='flex flex-col gap-6'>

                <Select variant='standard' size='lg' color='gray' label='Branch' value={branch} onChange={(val) => setBranch(val)}>
                  <Option value='Computer_Science'>Computer_Science</Option>
                  <Option value='Information_Technology'>Information_Technology</Option>
                  <Option value='Electronics&Telecommunication'>Electronics&Telecommunication</Option>
                </Select>
                <Select variant='standard' size='lg' color='gray' label='Semester' value={semester} onChange={(val) => setSemester(val)}>
                  <Option value='1'>1</Option>
                  <Option value='2'>2</Option>
                  <Option value='3'>3</Option>
                  <Option value='4'>4</Option>
                  <Option value='5'>5</Option>
                  <Option value='6'>6</Option>
                  <Option value='7'>7</Option>

                </Select>
                <Select variant='standard' size='lg' color='gray' label='Subject' value={subject} onChange={(val) => setSubject(val)}>
                  <Option value='ML'>ML</Option>
                  <Option value='CNS'>CNS</Option>
                  <Option value='DBMS'>DBMS</Option>
                  <Option value='CC'>CC</Option>
                  <Option value='WAD'>WAD</Option>
                </Select>
                <Input variant='standard' size='lg' color='gray' label='Publication' placeholder='eg. Decode' className='' onChange={(e) => setPublication(e.target.value)} value={publication} />
                <div className='flex flex-col justify-center gap-1'>
                  <label htmlFor="teamname" className=' font-medium tracking-wider text-blue-gray-300'>File</label>
                  <Dropzone className={'px-16 py-8 bg-white rounded-md border-2 border-dashed border-black'} files={file} setFiles={setFile} />
                </div>

              </div>
              <Button loading={isLoading} type='submit' variant="gradient" className="flex items-center justify-center gap-3 mt-4" fullWidth >
                <CloudArrowUpIcon className='h-5 w-5' />
                Upload File
              </Button>
            </form>

          </section>
          <section className='flex flex-col items-center justify-center'>
            <header className='flex items-center justify-center'>
              <h1 className='text-2xl lg:text-3xl text-center font-semibold underline'>
                All your uploaded notes are here.
              </h1>
            </header>
            <div className={`flex flex-col w-full items-center justify-center gap-6 mb-10 ${data.length > 5 ? 'h-[50rem] overflow-y-auto' : ''} px-8 pt-80 pb-10`}>
              {
                data.length > 0 ? <>
                  {
                    data.map(item => (
                      <NotesCard key={item._id}
                        item={item}

                      />))
                  }
                </> : <Typography variant="h5" color="gray" className="mt-10 font-light">
                  No notes added yet....
                </Typography>
              }
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Notes