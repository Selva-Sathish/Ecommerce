import React, { useEffect, useState } from 'react';
import { Axios } from '../../../axios/AxiosInstance';
import AddProductIcon from './assets/add';
import SavedIcon from './assets/Saved'; 
export default function ShowListProduct() {
    const [Data, setData] = useState([])
    useEffect(()=>{
        Axios.get('showlist/')
        .then(res => res.data)
        .then(data => setData(data))
        .catch(e => console.log("Network Err", e));
    },[])


   return (
        <div className='panel'>
            
            <div className='flex justify-between'>
                <div className='text-lg font-bold'>
                    All Show List Products  
                </div>
                <div>
                    <a href="/admin/showproduct/add/">
                        <button type='button' className='btn-danger flex gap-2 fill-white'> <AddProductIcon fill="white" /> Add Product</button>
                    </a>
                </div>
            </div>
            <table className='table-auto w-full mt-8'>
                <tr className='bg-slate-200'>
                    <td>Name</td>
                    <td>Image</td>
                    <td>Link</td>
                    <td>Action</td>
                </tr>
                {Data.map((value, index) => (
                    <tr key={index}>
                        <td>{value.name}</td>
                        <td className='inline-block mx-auto '><img src={value.image} height='40px' width='40px'/></td>
                        <td>{value.link}</td>
                        <td>Edit</td>
                    </tr>
                ))}
            </table>
        </div>
   )
 }
 