import React, { useEffect, useState } from 'react'
import { GetAllProductsService } from '../services/ProductServices'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Input, Tooltip, Typography } from '@material-tailwind/react'
import { ProductCard } from '../components/ProductCard'
import { LoadingSkeleton } from '../components/LoadingSkeleton'
import OrderCard from '../components/OrderCard'
import { TrashIcon } from '@heroicons/react/24/outline'

function Order() {
  const [products, setProducts] = useState([])
  const [productLoading, setProductLoading] = useState(false);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [totalCost, setTotalCost] = useState(0);


  function clearOrder() {
    setCurrentOrder([]);
    setTotalCost(0);
  }

  function addProduct(e, product) {
    e.preventDefault();
    const existingOrder = currentOrder.findIndex(item => item._id === product._id);
    const productPrice = parseFloat(product.price) || 1;
    if (existingOrder !== -1) {
      const updatedOrder = [...currentOrder];
      const newCount = updatedOrder[existingOrder].count + 1;
      const newTotal = newCount * productPrice;
      updatedOrder[existingOrder] = {
        ...updatedOrder[existingOrder],
        count: newCount,
        total: newTotal
      };
      setCurrentOrder(updatedOrder);
      setTotalCost(prev => prev + (productPrice))
    }
    else {
      setCurrentOrder([...currentOrder, { ...product, count: 1, total: productPrice }]);
      setTotalCost(prev => prev + productPrice);
    }

  }

  function removeProduct(e, product) {
    e.preventDefault();
    const existingOrder = currentOrder.findIndex(item => item._id === product._id);
    const productPrice = parseFloat(product.price) || 1;
    if (existingOrder !== -1) {
      let updatedOrder = [...currentOrder];
      const oldCount = updatedOrder[existingOrder].count;
      const newCount = updatedOrder[existingOrder].count - 1;
      if (newCount <= 0) {
        setTotalCost(prev => prev - productPrice);
        updatedOrder = currentOrder.filter(item => item._id != product._id)
      }
      else {
        const newTotal = newCount * productPrice;
        updatedOrder[existingOrder] = {
          ...updatedOrder[existingOrder],
          count: newCount,
          total: newTotal
        };
        setTotalCost(prev => prev - (oldCount * productPrice - newTotal));
      }
      setCurrentOrder(updatedOrder);
    }

    if (currentOrder.length == 0) {
      setTotalCost(0)
    }

  }

  useEffect(() => {
    setProductLoading(true)
    GetAllProductsService()
      .then((data) => {
        setProducts(data)
        setProductLoading(false)
      })
      .catch((error) => {
        setProductLoading(false)
        console.log(error)
      })
  }, [])

  return (
    <>
      <div>
        <div className='w-full container mx-auto px-4 pb-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            <div className='md:col-span-2 order-2 md:order-1'>
              <div className='px-8 mb-10'>
                <Input
                  icon={<MagnifyingGlassIcon className="h-3 lg:h-5 w-3 lg:w-5" />}
                  label="Search Product"
                />
              </div>
              <div>
                {products.length === 0 ? <>
                  <>
                    {
                      productLoading ? <>
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
                        No products added yet....
                      </Typography>
                    }
                  </>
                </> : <div className={`flex flex-wrap items-center justify-center gap-6 mb-10 ${products.length > 10 ? 'h-[50rem] overflow-y-auto' : ''} pt-4 pb-10`}>
                  {
                    products.map((product) => <ProductCard key={product._id} productName={product.productName} productPrice={product.price} productCategory={product.category} isAddable={true} add={(e) => addProduct(e, product)} />)
                  }
                </div>}
              </div>
            </div>
            <div className='md:col-span-1 order-1 md:order-2'>
              <Card className='w-full bg-gray-300'>
                <CardHeader shadow={false} floated={false} className='bg-transparent relative'>
                  <h4 className='font-medium text-xl text-black' >Current Order</h4>
                  <div className='absolute top-0 right-0'>
                    <Tooltip content="Clear cart" placement="top" className="bg-gray-600" animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }} >

                      <Button variant="text" className=" p-1 bg-transparent" size="sm"
                        onClick={clearOrder}
                      >
                        <TrashIcon
                          className="h-4 lg:h-5 w-4 lg:w-5 text-red-700"
                        />
                      </Button>
                    </Tooltip>
                  </div>
                </CardHeader>
                <CardBody className='h-[23rem] overflow-y-auto'>
                  {
                    currentOrder.length !== 0 ? <>
                      <div className='flex flex-col gap-3'>
                        {
                          currentOrder.map((item) => <OrderCard key={item._id} name={item.productName} price={item.total} quantity={item.count} add={(e) => addProduct(e, item)} remove={(e) => removeProduct(e, item)} />)
                        }
                      </div></> :
                      <div className='flex items-center justify-center'>
                        <h3 className='text-xl text-blue-gray-700 font-semibold'>Cart empty</h3>
                      </div>
                  }
                </CardBody>
                <CardFooter className='flex flex-col justify-center gap-4'>
                  <div className='flex items-center justify-between px-8 py-2 bg-blue-gray-200 rounded-md'>
                    <div><h5 className='text-xl text-red-500'>{totalCost}</h5></div>
                    <div><h5 className='text-xl font-medium text-black'>Rs.</h5></div>
                  </div>
                  <div>
                    <Button variant='gradient' size='lg' fullWidth color='green'>Place Order</Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order