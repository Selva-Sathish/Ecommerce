import {NavLink} from 'react-router-dom'
import AddProductIcon from './add';

function Sidebar(){
    return (
        <div className="w-[15vw] h-[100vh] panel">
            <NavLink to='showproduct/add/' className="w-full p-2 flex hover:bg-slate-200 gap-4 rounded-[6px]"> <AddProductIcon /> Add Product </NavLink>
        </div>
    )
}

export default Sidebar;