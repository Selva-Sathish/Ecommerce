import {NavLink} from 'react-router-dom'
import AddProductIcon from './add';
import './index.css';

function Sidebar(){
    return (
        <div className="w-[15vw] h-[100%] bg-white shadow-lg ">
            <div className='font-bold text-2xl bg-gradient-to-r from-sky-500 to-sky-700 text-transparent bg-clip-text p-[.2rem]'>
              ECom
            </div>
            {/* <div className='h-[0.7rem] rounded-r-lg bg-slate-300 mt-2'></div> */}
            <div className=''>
                <NavLink to='showproduct/' className="w-full p-2 flex hover:bg-slate-200 gap-4 rounded-[4px]"> <AddProductIcon /> Show Product </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;