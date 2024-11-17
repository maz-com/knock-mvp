/* This component returns the form to add a new item */

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddItemForm.css";

const AddItemForm = ({ sendNewItem }) => {
  //empty array to store categories data for dropdown list
  const [categories, setCategories] = useState([]);

  //fetch categories from categories db and add to 'categories' array
  useEffect(() => {
    //get all categories from db
    const fetchCategories = async () => {
      try {
        //communcate with databasa
        let response = await axios.get("/api/categories");
        setCategories(response.data);
      } catch (error) {
        // handle errors
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  //create reusable empty form object. Hard code "lend" as default type.
  const emptyForm = {
    title: "",
    description: "",
    image: "",
    type: "lend",
  };

  // input object: where the input values from the form are stored
  const [input, setInput] = useState(emptyForm);
  //call the useNavigate React hook to get the navigate function
  const navigate = useNavigate();

  //function to handle input change in the form
  const handleInputChange = (event) => {
    //store what is being entered in the form in a variable called value
    const value = event.target.value;
    //store what input it's being entered to in a variable called name
    const name = event.target.name;

    //update the state of the input object
    //pass and copy everything in the original state of the object (as we declared above)
    //update the key and value that match the input name and value where the event was triggered.
    setInput((state) => ({
      ...state,
      [name]: value,
    }));
  };

  //function to handle form submit
  const handleSubmit = (e) => {
    //clear default settings
    e.preventDefault();

    // pass data back up to parent (App.jsx)
    sendNewItem(input);

    // clear form after submitting
    setInput(emptyForm);

    //navigate back to AdminView
    navigate("/admin");
  };

  return (
    <>
      <div className="admin-view">
        <div className="profile-overview">
          <Link to="/admin">
            <h3 className="headers">
              <i className="arrow left"></i> back to My Profile
            </h3>
          </Link>
        </div>

        <div className="my-items">
          <h3>Add new item</h3>

          <div className="form-container">
            <form className="add-item-form" onSubmit={handleSubmit}>
              <label htmlFor="title">
                Title{" "}
                <input
                  type="text"
                  id="form-title"
                  name="title"
                  onChange={(e) => handleInputChange(e)}
                />
              </label>
              <label htmlFor="description">
                Description
                <textarea
                  type="text"
                  id="form-description"
                  name="description"
                  onChange={(e) => handleInputChange(e)}
                />
              </label>
              <label htmlFor="image-url">
                Image URL (mandatory if posting an item to lend)
                <input
                  type="text"
                  id="form-image-url"
                  name="image"
                  onChange={(e) => handleInputChange(e)}
                />
              </label>
              <label htmlFor="category">Category</label>
              <select
                placeholder="Category"
                id="form-category"
                name="category_id"
                onChange={(e) => handleInputChange(e)}
              >
                <option value="" disabled selected>
                  Select a category
                </option>
                {categories.map((category) => {
                  return (
                    //create option for each category
                    <option value={category.id} key={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
              <input
                type="radio"
                id="lend"
                name="type"
                value="lend"
                defaultChecked
                onChange={(e) => handleInputChange(e)}
              />
               {" "}
              <label htmlFor="lend">
                {" "}
                I want to lend this item to my neighbours
              </label>
              <br />
              <input
                type="radio"
                id="request"
                name="type"
                value="request"
                onChange={(e) => handleInputChange(e)}
              />
               {" "}
              <label htmlFor="request">
                I'm looking to borrow this item from a neighbour
              </label>
              <button className="submit-btn" type="submit" value="Submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItemForm;
