import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Axios } from '../../../axios/AxiosInstance';
import BackIcon from './assets/Back';
export default function EditProduct() {
    const [Id, setId] = useState(null);
    const [Image, setImage] = useState(null);
    const [File, setFile] = useState(null);
    const [Description, setDescription] = useState("");
    const [Link, setLink] = useState("");
    const {id} = useParams()
    
    useEffect(()=>{
        Axios.get(`showlist/${id}/`)
        .then(row => {
            setId(row.data.id);
            setDescription(row.data.name);
            setLink(row.data.link);
        })
    },[])

    function handleForm(e){
        e.preventDefault();
        const formData = new FormData();
        if (Image) formData.append('image', Image );
        formData.append("name", Description);
        formData.append('link', Link);

        Axios.patch(`showlist/edit/${id}/` ,formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(data => {
            if (data.status == 200){
                document.getElementById("back").click();
            }
        })
        .catch(e => console.log("Network Err", e));
    }
  return (
    <div className="p-2">
        <NavLink  to="/admin/showproduct/" id="back">
            <button type="button" className="btn-danger flex"><BackIcon /> Back</button>
        </NavLink>
      <h1 className="text-lg font-bold  p-2">Edit Product</h1>
      <form method="post" className="panel" encType="multipart/form-data" onSubmit={handleForm}>
          <div className="mt-4 p-2 grid grid-cols-3 gap-4">
              <div>
                  <label htmlFor="">Image</label><br />
                  <input type="file" accept="image/*" placeholder="img" className="file" name="img" onChange={(e) => setImage(e.target.files[0])}/>
              </div>
              <div>
                  <label htmlFor="">Product</label><br />
                  <input type="text" value={Description} placeholder="Product Name" name="name" className="form-input" onChange={(e) => setDescription(e.target.value)}/>
              </div>
              <div>
                  <label htmlFor="">Link</label>
                  <input type="text" value={Link} className="form-input" name="link" placeholder="Link" onChange={(e) => setLink(e.target.value)} />
              </div>
          </div>
          <div className="flex justify-end">
          <button type="submit" className="btn-primary">Update</button>
          </div>
      </form>
    </div>
  )
}
