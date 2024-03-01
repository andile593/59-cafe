import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewProduct } from "../redux/products/actions";

const Create = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewProduct(formData);
    navigate("/admin-products");
  };

  return (
    <form className="create-wrapper" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Product Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={formData.price}
        onChange={handleChange}
      />
      <button type="submit">Create Product</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewProduct: (productData) => dispatch(addNewProduct(productData)),
  };
};

export default connect(null, mapDispatchToProps)(Create);
