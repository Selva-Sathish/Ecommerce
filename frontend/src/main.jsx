import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminBaseLayout from './component/Admin/Layout/AdminBaseLayout.jsx';
import AddProduct from './component/Admin/ShowProduct/AddProduct.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='admin' element={<AdminBaseLayout />} >
          <Route path='showproduct/add/' element={<AddProduct />} />
        </Route>
      </Routes>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
