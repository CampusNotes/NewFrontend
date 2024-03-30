import React, { useEffect, useState } from 'react'
import BillCard from '../components/BillCard'
import { Input, Typography } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { GetAllBills } from '../services/OrderServices';
import { LoadingSkeleton } from '../components/LoadingSkeleton';



function Bills() {
  const [bills, setBills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    GetAllBills()
      .then(data => {
        setBills(data);
        console.log(data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      })
  }, [])


  return (
    <>

      <div>
        <div className='w-full container mx-auto px-4 pb-8'>
          <header className='flex items-center justify-center'>
            <h1 className='text-2xl lg:text-3xl text-center font-semibold underline'>
              All your bills are available here
            </h1>
          </header>
          <section className='w-full mt-4'>
            <div className='px-8 mb-10'>
              <Input
                icon={<MagnifyingGlassIcon className="h-3 lg:h-5 w-3 lg:w-5" />}
                label="Search Product"
              />
            </div>
            <div>
              {bills.length === 0 ? <>
                <>
                  {
                    isLoading ? <>
                      <div className='flex flex-wrap items-center justify-center gap-6 mt-10'>
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />

                      </div>
                    </> : <Typography variant="h5" color="gray" className="mt-10 font-light">
                      No Bills added yet....
                    </Typography>
                  }
                </>
              </> : <div className={`flex flex-wrap items-center justify-center gap-6 mb-10 ${bills.length > 10 ? 'h-[50rem] overflow-y-auto' : ''} px-8 pt-4 pb-10`}>
                {
                  bills.map(bill => (<>
                    <BillCard key={bill._id} billId={bill.BillId} totalPrice={bill.totalPrice} products={bill.products} />
                  </>))
                }
              </div>}
            </div>
          </section>
        </div>
      </div>

    </>
  )
}

export default Bills