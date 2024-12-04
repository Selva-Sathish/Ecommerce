import React, { useEffect, useState } from 'react'
import { Axios } from '../../../axios/AxiosInstance';
import { NavLink } from 'react-router-dom';

export default function ShowList() {
    const [Data, setData] = useState([]);
    useEffect(()=> {
        Axios.get("showlist/")
        .then(res => res.data)
        .then(data => setData(data))
        .catch(e => console("Network Err", e));
    },[])
    
    return (
    <div className='panel w-[98%] mx-auto mt-4'>
        <div className='flex justify-between gap-8'>
            {
                Data.map((value, index)  => (
                    <NavLink to={value.link} className='flex flex-col items-center hover:text-blue-600' key={index}>
                        <div><img src={value.image} width="50px" /></div>
                        <div className='text-sm'>{value.name}</div>
                    </NavLink>
                ))
            }
        </div>
    </div>
    )

}
