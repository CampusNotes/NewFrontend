import { MinusIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/24/solid'
import { Button, Card, CardBody, CardFooter, CardHeader, Chip } from '@material-tailwind/react'
import React from 'react'

function OrderCard({
  name,
  price,
  quantity,
  add = () => { },
  remove = () => { }
}) {
  return (
    <>
      <Card className='px-4 py-4 rounded-md'>
        <div className='flex items-center justify-between px-3 pb-4'>
          <div>{name}</div>
          <div>{price}</div>
        </div>
        <div className='flex items-center justify-center gap-2 lg:gap-4'>
          <button onClick={add}><PlusIcon className='h-5 w-5' /></button>
          <Chip variant="gradient" value={quantity} size="sm" className='px-4' />
          <button onClick={remove}><MinusIcon className='h-5 w-5' /></button>
        </div>
      </Card>
    </>
  )
}

export default OrderCard