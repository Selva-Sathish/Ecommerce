import {Routes, Route} from 'react-router-dom';
import AdminBaseLayout from '../component/Admin/Layout/AdminBaseLayout';
import AddProduct from '../component/Admin/ShowProduct/AddProduct';
import ShowListProduct from '../component/Admin/ShowProduct/ListProduct';
import EditProduct from '../component/Admin/ShowProduct/EditProduct';

import Home from '../component/Userpage/MainPage/Home';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        {/* <Route path='home' element={  } /> */}
      </Route>

      <Route path='admin' element={<AdminBaseLayout />} >
        <Route path='showproduct/' element={<ShowListProduct />} />
        <Route path='showproduct/add/' element={<AddProduct />} />
        <Route path='showproduct/edit/:id' element={<EditProduct />} />
      </Route>

    </Routes>
  )
}

export default Router;
