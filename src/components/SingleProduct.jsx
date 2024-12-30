import React from 'react'
import BreadCrum from './BreadCrum'
import ProductDisplay from './ProductDisplay'
import Description from './Description'
import {useParams} from "react-router-dom"
import all_product from './../Utils/all_products';

const SingleProduct = () => {
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div className='max-w-7xl mx-auto mb-[32px] mt-24px'>
        <BreadCrum product={product}/>
        <ProductDisplay product={product} />
        <Description/>
    </div>
  )
}

export default SingleProduct