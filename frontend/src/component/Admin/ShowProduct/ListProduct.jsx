import React, { useEffect, useState } from 'react';
import { Axios } from '../../../axios/AxiosInstance';
import { NavLink } from 'react-router-dom';
import AddProductIcon from './assets/add';

export default function ShowListProduct() {
    const [data, setData] = useState([]);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);

    // Fetch data for a specific page
    const fetchData = (url) => {
        Axios.get(url)
            .then((res) => res.data)
            .then((data) => {
                setData(data.results);
                setNext(data.next);
                setPrev(data.previous);
            })
            .catch((e) => console.log("Network Error", e));
    };

    // Initial fetch on component mount
    useEffect(() => {
        fetchData('showlist/');
    }, []);

    return (
        <div className="panel">
            <div className="flex justify-between">
                <div className="text-lg font-bold">All Show List Products</div>
                <div>
                    <NavLink to="/admin/showproduct/add/">
                        <button type="button" className="btn-danger flex gap-2 fill-white">
                            <AddProductIcon fill="white" /> Add Product
                        </button>
                    </NavLink>
                </div>
            </div>
            <table className="table-auto w-full mt-8">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Image</td>
                        <td>Link</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((value, index) => (
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td className="inline-block mx-auto">
                                    <img src={value.image} alt={value.name} height="40px" width="40px" />
                                </td>
                                <td>{value.link}</td>
                                <td>Edit</td>
                            </tr>
                        ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3"></td>
                        <td className="flex gap-4">
                            <button disabled={!prev} onClick={() => fetchData(prev)}>
                                Prev
                            </button>
                            <button disabled={!next} onClick={() => fetchData(next)}>
                                Next
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
