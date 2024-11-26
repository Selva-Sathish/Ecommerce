import {Routes, Route} from 'react-router-dom';
import AdminBaseLayout from '../component/Admin/Layout/AdminBaseLayout';
import AddProduct from '../component/Admin/ShowProduct/AddProduct';
import ShowListProduct from '../component/Admin/ShowProduct/ListProduct';
function Router() {
  return (
    <Routes>
      <Route path='admin' element={<AdminBaseLayout />} >
        <Route path='showproduct/add/' element={<AddProduct />} />
        <Route path='showproduct/' element={<ShowListProduct />} />
      </Route>
    </Routes>
  )
}

export default Router;
