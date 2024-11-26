import { useState } from "react";
import { Axios } from "../../../axios/AxiosInstance";
import SavedIcon from "./assets/Saved";
import BackIcon from "./assets/Back";
import {NavLink} from 'react-router-dom'
function AddProduct(){
    const [Image, setImage] = useState(null);
    const [Description, setDescription] = useState("");
    const [Link, setLink] = useState("");

    function handleForm(e){
        e.preventDefault();
        if(!Image || !Description || !Link){
            alert("please fill all the fields");
            return
        }
        const formData = new FormData();
        formData.append('image', Image);
        formData.append("name", Description);
        formData.append('link', Link);

        Axios.post('showlist/add/' ,formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(data => {
            if (data.status == 201){
                const successmsg = document.getElementById("success");
                successmsg.classList.toggle('hidden');

                setTimeout(()=>{
                    successmsg.classList.toggle("hidden");
                },5000)
            }
        })
        .catch(e => console.log("Network Err", e));
    }
    return (
        <div className="p-2">
            <NavLink to="/admin/showproduct/">
                <button type="button" className="btn-danger flex"><BackIcon /> Back</button>
            </NavLink>

            <div id="success" className="hidden">
                <div className="flex flex-col justify-end relative animate-bounce">
                    <div className="bg-primary p-2 text-white flex gap-2"> <SavedIcon/> Saved Successfully</div>
                    <div className="bg-slate-300 h-[0.5rem] w-full absolute animate-load bottom"></div>
                </div>
            </div>

            <h1 className="text-lg font-bold  p-2">Add Product</h1>
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
                <button type="submit" className="btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;