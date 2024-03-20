import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import "./Create.css";

const Create = () => {

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);

  const productCollectionRef = collection(db, "products");
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addingProduct = await addDoc(productCollectionRef, {
        name: title,
        description: description,
        amount: price,
        quantity: 1,
      }); 
      console.log("Document written with ID:", addingProduct.id);
     
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="create-section">
      <h1>Create a new product</h1>
      <form onSubmit={handleSubmit}>
        <label>Product title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={handleTitleChange}
        />
        <label>Description:</label>
        <textarea
          type="text"
          required
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
        <label>Price:</label>
        <input
          type="number"
          required
          value={price}
          onChange={handlePriceChange}
        />

        <button>Add Product</button>
      </form>
    </div>
  );
};

export default Create;
