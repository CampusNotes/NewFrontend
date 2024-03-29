import { MinusIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/24/solid'
import { Button, Card, CardBody, CardFooter, CardHeader, Chip } from '@material-tailwind/react'
import React from 'react'

function OrderCard() {
  return (
    <>
      <Card floated={false} className='px-4 py-4 rounded-md'>
        <div className='flex items-center justify-between px-3 pb-4'>
          <div>Name</div>
          <div>price</div>
        </div>
        <div className='flex items-center justify-center gap-2 lg:gap-4'>
          <Button variant='text' size='sm' color=''><PlusIcon className='h-5 w-5' /></Button>
          <Chip variant="gradient" value={6} size="sm" className='px-4' />
          <Button variant='text' size='sm' color=''><MinusIcon className='h-5 w-5' /></Button>
        </div>
      </Card>
    </>
  )
}

export default OrderCard