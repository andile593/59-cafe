import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="nav-container">
      <div className="link-logo-container">
        <Link to="/admin-dashbord">59-Cafe</Link>
      </div>
      <div className="link-container">
        <Link to="/admin-dashbord">Dashboard</Link>
      </div>
      <div className="link-container">
        <Link to="/admin-products">Products</Link>
      </div>
      <div className="link-container">
        <Link to="/admin-orders">Orders</Link>
      </div>
      <div className="link-container">
        <Link to="/admin-customers">Customers</Link>
      </div>
      <div className="link-container">
        <Link to="/admin-settings">Settings</Link>
      </div>
    </div>
  );
};

export default AdminNav;
 