import React, { useEffect, useState } from 'react'
import { GetAllProductsService } from '../services/ProductServices'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Card, CardBody, CardHeader, Input, Typography } from '@material-tailwind/react'
import { ProductCard } from '../components/ProductCard'
import { LoadingSkeleton } from '../components/LoadingSkeleton'
import OrderCard from '../components/OrderCard'

function Order() {
  const [products, setProducts] = useState([])
  const [productLoading, setProductLoading] = useState(false);
  const [currentOrder, setCurrentOrder] = useState([]);

  function addProduct(e, p) {
    e.preventDefault();
    setCurrentOrder([...currentOrder, p])
    console.log(currentOrder);
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
                <CardHeader shadow={false} floated={false} className='bg-transparent'>
                  <h4 className='font-medium text-xl text-black' >Current Order</h4>
                </CardHeader>
                <CardBody>

                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order