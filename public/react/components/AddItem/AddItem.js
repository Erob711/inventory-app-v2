import useField  from "../../customHooks/useField";
import useAddItem from "../../customHooks/useAddItem";
import "./AddItem.css";
const AddItem = () => {

  const name = useField("text", "");
  const price = useField("text", "0");
  const description = useField("text", "");
  const category = useField("text", "");
  const image = useField("text", "");

  const newItem = {
    name: name.value,
    price: price.value,
    description: description.value,
    category: category.value,
    image: image.value,
  };
  const addItem = useAddItem(newItem);

  return (
    <>
      <h1 className="header">Add an Item</h1>
      <form onSubmit={addItem} className="form">
        <input
          type={name.inputType}
          placeholder="Name"
          value={name.value}
          onChange={name.onChange}
          className="input"
        />

        <input
          type={price.inputType}
          placeholder="Price"
          value={price.value}
          onChange={price.onChange}
          className="input"
        />

        <input
          type={description.inputType}
          placeholder="Description"
          value={description.value}
          onChange={description.onChange}
          className="input"
        />

        <input
          type={category.inputType}
          placeholder="Category"
          value={category.value}
          onChange={category.onChange}
          className="input"
        />

        <input
          type={image.inputType}
          placeholder="Image Link"
          value={image.value}
          onChange={image.onChange}
          className="input"
        />

        <button type="submit" className="submit">Submit & Add Item</button>
      </form>
    </>
  );
};

export default AddItem;
