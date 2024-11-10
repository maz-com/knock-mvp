import { useState, useEffect } from "react";
import axios from "axios";
import "./AddItemForm.css";

const AddItemForm = ({ sendNewItem }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //get all categories from db
    const fetchCategories = async () => {
      try {
        //communcate with databasa
        let response = await axios.get("/api/categories");
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        // handle errors
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  //create reusable empty form object
  const emptyForm = {
    title: "",
    description: "",
    image: "",
  };

  // new item object: where the input values from the form are stored
  const [input, setInput] = useState(emptyForm);

  // when this function is called,
  const handleInputChange = (event) => {
    //what is being entered (fom the event object which is created by default when an event is registered)
    const value = event.target.value;
    //where it's happening (also from the event object)
    const name = event.target.name;

    //update the state of the project object
    //pass and copy everything in the original state of the object (as we declared above)
    //update the key and value that match the input name and value where the event was triggered.
    setInput((state) => ({
      ...state,
      [name]: value,
    }));
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // pass data back up to parent using props.addProject() (calls the addProject function in App.jsx)
    sendNewItem(input);

    // clear form after submitting
    setInput(emptyForm);
  };

  return (
    <>
      <h3 className="profile-headers">Add new item</h3>
      <div className="form-container">
        <form className="add-item-form" onSubmit={handleSubmit}>
          <label htmlFor="title">
            Title{" "}
            <input
              type="text"
              id="form-title"
              name="title"
              placeholder="Title"
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              type="text"
              id="form-description"
              name="description"
              placeholder="Description"
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <label htmlFor="image-url">
            Image URL
            <input
              type="text"
              id="form-image-url"
              name="image"
              placeholder="Image URL"
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <label htmlFor="category">Category</label>
          <select placeholder="Category" id="form-category" name="category">
            <option value="" disabled selected>
              Select a category
            </option>
            {categories.map((category) => {
              return (
                //create option for each category
                <option value={category.name} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <input
            type="radio"
            id="lend"
            name="lend-or-borrow"
            value="lend"
            defaultChecked
          />
           {" "}
          <label htmlFor="lend">
            {" "}
            I want to lend this item to my neighbours
          </label>
          <br />
          <input
            type="radio"
            id="borrow"
            name="lend-or-borrow"
            value="borrow"
          />
           {" "}
          <label htmlFor="borrow">
            I'm looking to borrow this item from a neighbour
          </label>
          <button className="add-new-item" type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItemForm;
