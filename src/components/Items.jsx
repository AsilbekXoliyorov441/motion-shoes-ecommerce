import React from 'react'
import { Link } from 'react-router-dom'

const Items = ({product}) => {
  return (
    <div className='group relative'>
        <Link to={`/products/${product?.id}`}>
        <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 h-95'>
            <img src={product?.image} alt={product?.name} className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
        </div>
        </Link>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className='text-sm text-gray-700'>
                    <Link to={`products/${product?.id}`}>
                        <span className=" inset-0 aria-hidden:true">{product?.name}</span>
                    </Link>
                </h3>
            </div>
            <p className='text-sm font-medium text-gray-900'>${product?.new_price}</p>
        </div>
    </div>
  )
}

export default Items