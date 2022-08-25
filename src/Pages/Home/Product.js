import React from "react";
import {useNavigate } from "react-router-dom";
const Product = ({product}) => {
    const {_id,name,price,description,max,min,image} =product;
    const navigate = useNavigate()

    const handleDetails =(id)=>{
         navigate(`productDetail/${id}`)
    }
    return (


      <div className="course-item group">

      <div className=" card card-compact w-96 bg-slate-900  shadow-xlborder border-gray-100 rounded-xl transition hover:shadow-2xl group-hover:opacity-75 ">
        <img src={image} alt="" srcset="" className="p-4 rounded rounded-b-none w-full rounded-xl" />
        <div className="mt-3 p-3 card-body">
          <div className="flex justify-between px-4">
            <div>
              <span className="bg-[#FCF1EB] text-orange-400 px-5 py-2 rounded text-[13px] font-bold">
              {name}
              </span>
            </div>

            <div>
              <span className="text-green-600 font-bold"> $2,000 </span>
            </div>
          </div>
          <div className=" mb-4 text-xs text-white bg-slate-900 p-4 rounded-xl card-body">
            <h2 className="text-base font-bold">
              <p>Order between </p>
            <p className='font-semibold text-xm'>Maximum Quantity : {max}</p>
            <p className='font-semibold text-xm'>Minimum Quantity : {min}</p>
            </h2>
            <p className=" text-gray-400">32 Customer</p>
            <div className="flex items-center text-xs">
              <img src="./images/avatar1.png" alt="" className="w-8 h-8 rounded-full z-0" />
              <img src="./images/avatar2.png" alt="" className="w-8 h-8 rounded-full z-10 -ml-4" />
              <img src="./images/avatar3.png" alt="" className="w-8 h-8 rounded-full z-10 -ml-4" />
              <img src="./images/avatar1.png" alt="" className="w-8 h-8 rounded-full z-10 -ml-4" />
              <div className="w-8 h-8 rounded-full z-10 -ml-4 bg-gray-100 text-gray-400 text-center pt-2">
                +2
              </div>
              <div className="text-gray-400 ml-4">Customer Purchase</div>
            </div>
          </div>
          <div className="flex justify-center">
          <button onClick={()=> handleDetails(_id)} className="btn btn-primary w-1/2 text-center shadow-lg bg-slate-900 font-bold text-white ">Buy Now</button>
          </div>
        </div>
        
      </div>
    </div>
      //   <div className="card card-compact w-96 bg-base-100 shadow-xl bg-slate-400">
      //   <figure className="mt-5 mx-5"><img className="rounded-xl" src={image} alt="Shoes" /></figure>
      //   <div className="card-body text-gray-800">
      //     <h2 className="card-title">{name}</h2>
      //     <p className='font-semibold'>{description}</p>
      //     <p className='font-semibold text-xl'>Price : ${price}</p>
      //     <p className='font-semibold text-xm'>Maximum Quantity : {max}</p>
      //     <p className='font-semibold text-xm'>Minimum Quantity : {min}</p>
      //     <div className="card-actions justify-center mt-5">
      //     <button onClick={()=> handleDetails(_id)} className="btn btn-primary w-full">Buy Now</button>
      //     </div>
      //   </div>
      // </div>
    );
};

export default Product;
