import Sidebar from "../Sidebar"
import {Outlet} from 'react-router-dom'

function AdminBaseLayout(){
    return (
        <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className="w-full p-5">
                    <Outlet />
                </div>
        </div>
    )
}

export default AdminBaseLayout;