import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {useQuery } from 'react-query'
import Loading from '../Shared/Loading';
const UpdateProduct = () => {
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const [productName,setProductName] = useState('');
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0);
    const [max,setMax] = useState(0);
    const [min,setMin] = useState(0);
    const [image,setImage] = useState('');

   
    const {register,formState: { errors },handleSubmit,reset} = useForm();
    const imageStorageKey = "21e7add05964e5e86f7b4e6781085ae0";
  
    useEffect(()=>{
      fetch(`https://stormy-brook-85190.herokuapp.com/updateProduct/${id}`)
      .then(res=> res.json())
      .then(data => {
        setProduct(data);
        setProductName(data.name);
        setDescription(data.description)
        setPrice(parseInt(data.price));
        setMax(parseInt(data.max));
        setMin(parseInt(data.min));
      })
    },[id])

    if(!product){
      return <Loading></Loading>
    }


   
  const onSubmit = (data)=>{
    console.log(data)
  }

    return (
      <div>
      <h2 className="mt-5 text-2xl font-bold text-center text-gray-800 md:my-5">
        Update Product {product?._id}
      </h2>

      <div className="md:flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 font-bold text-2xl">

        <div className="form-control  w-full">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
             
              {...register("productName", {
                value: {},
                required: {
                  value: false,
                  message: "Product Name is Required",
                },
              
              })}
             
             onChange = {(e)=> setProductName(e.target.value)}
             
              placeholder="Enter You Name"
              className="input input-bordered w-full"
            />
            <label className="label">
              {errors.productName?.type === "required" && (
                <span className="label-text-alt text-red-700">
                  {errors.productName.message}
                </span>
              )}
            </label>
        </div>
         
        <div className="form-control  w-full">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <input
              type="text"
              value = {description}
             
              {...register("description", {
                required: {
                  value: true,
                  message: "Description Name is Required",
                },
              })}
              onChange = {(e)=>setDescription(e.target.value)}
              placeholder="Description"
              className="input input-bordered w-full"
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-700">
                  {errors.description.message}
                </span>
              )}
            </label>
        </div>

        <div className="form-control  w-full">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input
              type="text"
              value={price}
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
              onChange = {(e)=>setPrice(e.target.value)}
              placeholder="Price"
              className="input input-bordered w-full"
            />
           
        </div>

        <div className="form-control  w-full">
            <label className="label">
              <span className="label-text">Maximum Quantity</span>
            </label>
            <input
              type="number"
              value={max}
              {...register("max", {
                required: {
                  value: true,
                  message: "Maximum is Required",
                },
              })}
              onChange = {(e)=> setMax(e.target.value)}
              placeholder="Maximum Quantity"
              className="input input-bordered w-full"
            />
            <label className="label">
              {errors.max?.type === "required" && (
                <span className="label-text-alt text-red-700">
                  {errors.max.message}
                </span>
              )}
            </label>
        </div>

        <div className="form-control  w-full">
            <label className="label">
              <span className="label-text">Minimum Quantity</span>
            </label>
            <input
              type="number"
              value={min}
              {...register("min", {
                required: {
                  value: true,
                  message: "Minimum is Required",
                },
              })}
              onChange = {(e)=> setMin(e.target.value)}
              placeholder="Minimum Quantity"
              className="input input-bordered w-full"
            />
            <label className="label">
              {errors.min?.type === "required" && (
                <span className="label-text-alt text-red-700">
                  {errors.min.message}
                </span>
              )}
            </label>
        </div>

        <div className="form-control  w-full">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
             
              {...register("image", {
                required: {
                  value: true,
                  message: "image is Required",
                },
              })}
              className=" text-sm font-bold w-full"
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-700">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>

          <input className="btn w-full text-white" type="submit" value="Add" />
        </form>
      </div>
    </div>
    );
};

export default UpdateProduct;