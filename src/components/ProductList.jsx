import React from "react";
import all_product from "../Utils/all_products";
import Items from './Items';

const ProductList = (props) => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center font-serif">
        Top Sellers
      </h2>
      <p className="text-center mt-3 md:px-56">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum libero
        quo explicabo atque similique dicta sit animi voluptatum. Ipsam,
        voluptatum?
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {all_product.map((product) => {
            if(props.category === product.category){
                return <Items key={product.id} product={product}/>
            }
        })}
      </div>

    </div>
  );
};

export default ProductList;
