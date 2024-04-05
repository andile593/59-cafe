import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../../firebase/firebase";
import { getProducts } from '../productService'
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storageRef = ref(storage, `images/${image.name}`);
      console.log("Storage Reference:", storageRef);

      if (!image) {
        console.error("No image selected.");
        return;
      }

      await uploadBytes(storageRef, image);
      console.log("Image uploaded successfully.");

      const imageUrl = await getDownloadURL(storageRef);
      console.log("Image URL:", imageUrl);

      await addDoc(productCollectionRef, {
        name: title,
        description: description,
        amount: price,
        quantity: 1,
        image: imageUrl,
      });

      getProducts();
      navigate('/products');
    } catch (error) {
      console.error("Error:", error);
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
        <label>Image:</label>
        <input
          type="file"
          accept="image/*"
          required
          onChange={handleImageChange}
        />
        <button>Add Product</button>
      </form>
    </div>
  );
};

export default Create;
