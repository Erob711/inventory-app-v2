import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../reducers/itemReducer/itemReducer";

const AddItem = () => {
  //Styling
  const header = {
      textAlign: "center", 
      fontSize: "5vh"
  }
  const formStyle = {
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      justifyContent: "space-between",
      alignItems: "center",
      height: "80vh",
      margin: "5px"
  }
  const inputStyle = {
    display: "flex",
    height: "10vh",
    width: "90vw",
    fontSize: "8vh"
  }
  const submitStyle = {
      height: "15vh",
      fontSize: "5vh"
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
      price,
      description,
      category,
      image,
    };

    dispatch(addItem(newItem));

    setName("");
    setPrice(0);
    setDescription("");
    setCategory("");
    setImage("");
    navigate('/');
  };

  return (
    <>
      <h1 style={header}>Add an Item</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Image Link"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={submitStyle}>Submit & Add Item</button>
      </form>
    </>
  );
};

export default AddItem;
