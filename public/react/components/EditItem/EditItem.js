import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useEditItem from "../../customHooks/useEditItem.js";
import useField from "../../customHooks/useField.js";
import "./EditItem.css";
const EditItem = () => {

    const items = useSelector((state) => state.items);
    const id = useParams().id
    const item = items.find((item) => item.id === Number(id));

    const name = useField("text", item.name);
    const price = useField("text", item.price);
    const description = useField("text", item.description);
    const category = useField("text", item.category);
    const image = useField("text", item.image);

    const edittedItem = {
      name: name.value,
      price: price.value,
      description: description.value,
      category: category.value,
      image: image.value,
    };
    const editItem = useEditItem(id, edittedItem, items);

    return (
        <>
          <h1 className="header">Edit Item</h1>
          <form onSubmit={editItem} className="form">
            <input
              type={name.inputType}
              value={name.value}
              onChange={name.onChange}
              className="input"
            />
    
            <input
              type={price.inputType}
              value={price.value}
              onChange={price.onChange}
              className="input"
            />
    
            <input
              type={description.inputType}
              value={description.value}
              onChange={description.onChange}
              className="input"
            />
    
            <input
              type={category.inputType}
              value={category.value}
              onChange={category.onChange}
              className="input"
            />
    
            <input
              type={image.inputType}
              value={image.value}
              onChange={image.onChange}
              className="input"
            />
    
            <button type="submit" className="submit">Submit</button>
          </form>
          <Link to={`/${id}`}><button className="submit">Back To Item</button></Link>
        </>
    )
};

export default EditItem;