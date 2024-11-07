const express = require("express");
const router = express.Router();
//import items controller functions from itemController
const itemsController = require("../controllers/itemsController");

/* GET example */
//router.get("/", getExample);

//create route to get all items
router.get("/items", itemsController.getItems);

//create route to get all categories
router.get("/categories", itemsController.getCategories);

//create route to get item by id
router.get("/items/:id", itemsController.getItem);

//create route to get items by category_id
router.get("/items/category/:category_id", itemsController.getItemsByCategory);

//create route to get item by type
router.get("/items/type/:type", itemsController.getItemsByType);

//create route to get item by user_id
router.get("/items/user/:user_id", itemsController.getItemsByUser);

//create route to create a new item
router.post("/items", itemsController.createItem);

//create route to update item is_availability status
router.put("/items/:id", itemsController.updateAvailability);

//create route to delete item by id
router.delete("/items/:id", itemsController.deleteItem);

//create route to get user by id
router.get("/users/:id", itemsController.getUser);

module.exports = router;
