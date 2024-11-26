import Sidebar from "../Sidebar"
import {Outlet} from 'react-router-dom'

function AdminBaseLayout(){
    return (
        <div className="flex">
            <div className="w-[20vw] top-0 bottom-0 sticky h-screen">
                <Sidebar />
            </div>
            <div className="w-full p-5">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminBaseLayout;