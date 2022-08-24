import React, { useEffect, useState } from 'react';

import {useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import Product from './Product';
const Services = () => {


   

    const {data:products,isLoading} = useQuery('products',()=>fetch('https://stormy-brook-85190.herokuapp.com/products')
    .then(res=>res.json())
   
    )

    if(isLoading){
        return <Loading></Loading>
    }
   
    return (
        <div className="my-5">
        <div className="my-28">
          <h1 className="font-bold text-xl text-center text-primary my-5">
            Our Tools
          </h1>
          <h1 className="font-bold text-3xl text-center text-accent my-5">
            Tools We Made For Our Customers
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-10 grid-cols-1 justify-items-center md:p-1 p-4">

          {
              products?.map(product=> <Product
              key={product._id}
              product={product}
             
             
              ></Product>)
          }
        
        </div>
  
         
       
      </div>
    );
};

export default Services;