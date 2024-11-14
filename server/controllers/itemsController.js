// import the DB pool from your config folder
const pool = require("../config/db");

//controller to get all items
const getItems = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM items");
  res.status(200).send(result);
};

//controller to get all categories
const getCategories = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM categories");
  res.status(200).send(result);
};

//controller to get an item by id
const getItem = async (req, res) => {
  //get id from request object
  const { id } = req.params;

  //make a database query to search for an item by id
  const [result] = await pool.query("SELECT * FROM items WHERE id = ?", [id]);

  //return result
  res.status(200).send(result);
};

//controller to get items by category_id
const getItemsByCategory = async (req, res) => {
  //get id from request object
  const { category_id } = req.params;

  //make a database query to search for an item by id
  const [result] = await pool.query(
    "SELECT * FROM items WHERE category_id = ?",
    [category_id]
  );

  //return result
  res.status(200).send(result);
};

//controller to get items by type
const getItemsByType = async (req, res) => {
  //get id from request object
  const { type } = req.params;

  //make a database query to search for an item by id
  const [result] = await pool.query("SELECT * FROM items WHERE type = ?", [
    type,
  ]);

  //return result
  res.status(200).send(result);
};

//controller to get items by user_id
const getItemsByUser = async (req, res) => {
  //get id from request object
  const { user_id } = req.params;

  //make a database query to search for an item by id
  const [result] = await pool.query("SELECT * FROM items WHERE user_id = ?", [
    user_id,
  ]);

  //return result
  res.status(200).send(result);
};

//controller to create a new item
const createItem = async (req, res) => {
  console.log(req.body);
  // grab data from request body
  const {
    title,
    description,
    image,
    category_id,
    is_available,
    user_id,
    type,
  } = req.body;

  if (title && description && image && category_id && user_id && type) {
    //database query: insert new item
    await pool.query(
      "INSERT INTO items (title, description, image, category_id, user_id, type) VALUES (?, ?, ?, ?, ?, ?);",
      [title, description, image, category_id, user_id, type]
    );

    //database query: get and return new item
    const [result] = await pool.query(
      //order items by id number, select only 1 with highest id number
      "SELECT * FROM items ORDER BY id DESC LIMIT 1;"
    );
    res.status(200).send(result[0]);
  } else {
    res.status(400).send({ error: "Please provide all values for new item" });
  }
};

//controller to update item is_available status by id
const updateAvailability = async (req, res) => {
  //grab id from request params
  const { id } = req.params;

  //grab data from request body
  const { is_available } = req.body;

  //update database record
  await pool.query("UPDATE items SET is_available = ? WHERE id = ?;", [
    is_available,
    id,
  ]);

  //get and return updated task
  const [result] = await pool.query("SELECT * FROM items where id = ?;", [id]);
  res.status(200).send(result[0]);
};

//controller to delete item by id
const deleteItem = async (req, res) => {
  //grab id from request params
  const { id } = req.params;

  //delete database record
  await pool.query("DELETE FROM items WHERE id = ?", [id]);

  res.status(200).send({ message: `Successfully deleted item with id: ${id}` });
};

// controller to add user
const getUser = async (req, res) => {
  //get id from request object
  const { id } = req.params;

  //make a database query to search for an item by id
  const [result] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);

  //return result
  res.status(200).send(result);
};

// controller to get user data for an item by item id
const getItemUserData = async (req, res) => {
  //get id from request object
  const { id } = req.params;

  //make a database query to search for an item by id
  const [result] = await pool.query(
    `SELECT users.username FROM items LEFT JOIN users ON items.user_id = users.id WHERE items.id = ?`,
    [id]
  );

  // Check if the item was found
  if (result.length === 0) {
    return res.status(404).json({ message: "Item not found" });
  }

  // Return the result
  res.status(200).send(result[0]); // Return only the first item, as `id` should be unique
};

/* const getAllItemsData = async (req, res) => {
  //make a database query to search for an item by id
  const [result] = await pool.query(
    `SELECT items.*, users.username 
       FROM items 
       LEFT JOIN users ON items.user_id = users.id`
  );

  // Return the results as an array of items
  console.log(result);
  res.status(200).json(result);
}; */

module.exports = {
  getItems,
  getCategories,
  getItem,
  getItemsByCategory,
  getItemsByType,
  getItemsByUser,
  createItem,
  updateAvailability,
  deleteItem,
  getUser,
  getItemUserData,
};
