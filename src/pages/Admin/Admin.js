import { BrowserRouter, Routes } from "react-router-dom";
import AdminNav from "../../Components/Admin/AdminNav";


const Admin = () => {
  return (
    <BrowserRouter>
      <div className="admin-cover">
        <AdminNav />
        <Routes>
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/admin-products" element={<Products />} />
          <Route path="/admin-orders" element={<Orders />} />
          <Route path="/admin-customers" element={<Customers />} />
          <Route path="/admin-settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Admin;
