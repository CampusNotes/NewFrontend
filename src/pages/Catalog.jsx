import { Button, Card, Input, Option, Select, Spinner, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { AddProductService, DeleteProductService, GetAllProductsService } from '../services/ProductServices';
import Notify from '../helpers/Notify';
import { ProductCard } from '../components/ProductCard';
import { LoadingSkeleton } from '../components/LoadingSkeleton';
import axios from 'axios';

function Catalog() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productLoading, setProductLoading] = useState(false);
  const [updateChanges, setUpdateChanges] = useState(0);

  const clearInput = () => {
    setProductName('');
    setProductPrice('');
    setProductCategory('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || productPrice == 0 || !productCategory) {
      Notify('error', 'Please enter all product details');
      return;
    }

    const data = {
      productName,
      productPrice,
      productCategory
    }

    console.log(data);

    try {
      setIsLoading(true)
      const isAdded = await AddProductService(data);

      if (isAdded) {
        Notify('success', 'Product added successfully')
        clearInput();
        setIsLoading(false)
        setUpdateChanges((prev) => prev + 1)
      }
      else {
        Notify('error', 'Unable to add product at the moment')
        clearInput();
        setIsLoading(false)
        setUpdateChanges((prev) => prev + 1)
      }

    } catch (error) {
      console.log(error);
      clearInput();
      setIsLoading(false)
    }
  }

  function getProducts() {

    setProductLoading(true)
    GetAllProductsService()
      .then((data) => {

        const p = data || [];
        if (p.length > 0) {
          setProducts(p);
          setProductLoading(false);
        }
        else {
          setProductLoading(false)
        }
      })
      .catch((error) => {
        console.log(error);
        setProductLoading(false)
      })
  }


  async function removeProduct(e, id) {
    e.preventDefault();
    console.log(id);

    DeleteProductService(id)
      .then((isDeleted) => {
        if (isDeleted) {
          Notify('success', 'Product removed successfully');
          setUpdateChanges((prev) => prev + 1)
        }
        else {
          Notify('error', 'Unable to remove product at the moment')
          setUpdateChanges((prev) => prev + 1)
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  useEffect(() => {

    getProducts()
  }, [updateChanges, setUpdateChanges])
  return (
    <>
      <div className=''>
        <div className='container mx-auto px-4 '>
          <div className='grid grid-cols-1'>
            <section className='flex flex-col items-center justify-center '>
              <header className='flex items-center justify-center'>
                <h1 className='text-2xl lg:text-3xl text-center font-semibold underline'>
                  Add products  to your catalog here.
                </h1>
              </header>
              <form className='mt-16 mb-28  max-w-screen-lg w-full sm:w-96 ' onSubmit={(e) => handleSubmit(e)}>
                <div className='flex flex-col gap-6'>
                  <Input variant='standard' size='lg' color='gray' label='Product Name' placeholder='eg.Poha' className='' onChange={(e) => setProductName(e.target.value)} value={productName} />
                  <Input type='number' variant='standard' size='lg' color='gray' label='Product Price' placeholder='eg. 100' onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                  <Select variant='standard' size='lg' color='gray' label='Product Category' value={productCategory} onChange={(val) => setProductCategory(val)}>
                    <Option value='Food'>Food</Option>
                    <Option value='Beverage'>Beverage</Option>
                    <Option value='Sweets'>Sweets</Option>
                    <Option value='Dairy'>Dairy</Option>
                  </Select>
                </div>
                <Button loading={isLoading} type='submit' color='black' className="mt-8" fullWidth>Add to catalog</Button>
              </form>

            </section>

            <section className='mb-12'>
              <header className='flex items-center justify-center'>
                <h1 className='text-xl lg:text-2xl text-center font-medium text-blue-gray-700 '>
                  All products in your Catalog are here.
                </h1>
              </header>
              <div className=''>
                <div className='flex items-center justify-center'>
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
                      products.map((product) => <ProductCard key={product._id} productName={product.productName} productPrice={product.price} productCategory={product.category} isRemovable={true} remove={(e) => removeProduct(e, product._id)} />)
                    }
                  </div>}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalog