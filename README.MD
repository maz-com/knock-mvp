# Knock!

## About KNOCK!

Knock! was developed by Mara Caldarini as their first MVP project during the Full Stack Development bootcamp at CodeOp. It is a JavaScript full stack app, a frontend built in React, an API built in Node/Express, and a MySQL database.

The platform enables neighbors to share tools and household items, fostering community connections while reducing consumption. It addresses the challenges of social isolation, rising living costs, and excessive consumption in modern urban life. At its core, Knock! promotes a simple idea: buy less, connect more.

## Tech Stack

### Frontend

- React.js
- ReactRouter
- Axios
- Vite
- CSS

### Backend

- Node.js
- Express.js
- MySQL2
- Axios

### Features

- Browse items you can borrow from your neighbours
- List items your neighbours can borrow
- Display your items as currently available or unavailable
- Contact your neighbor to request an item
- Share requests for items you are looking to borrow
- Delete items you are no longer offering
- Filter items by category

## Getting Started

### 1. Clone the repository

If using HTTPS:

```
git clone https://github.com/maz-com/my-mvp.git
```

If using SSH:

```
git clone git@github.com:maz-com/my-mvp.git
```

### 2. Database setup

#### Open MySQL:

If you use MySQL Workbench, open that.

OR:
If you are using Windows, open the MySQL Command Line Interface (CLI) tool.

OR:
If you are using a Mac, run `mysql -u root -p` in your terminal to open the MySQL CLI.

#### Create new database:

Create a new database by running `CREATE DATABASE knock;` (or replace `knock` with a name of your choosing).

Check that it worked: If you're using MySQL Workbench, you should see your new database name in your database list on the left.

If you're using the MySQL CLI (Mac or Windows), run SHOW DATABASES; to see a list of your databases: the new one should be there.

#### Add .env file:

Create a `.env` file (in the root project directory) to store your database connection information. You can follow the format example below. It should include the name of your project's database, as well as your host, MySQL username and password.

```
DB_HOST=localhost
DB_USER=root
DB_PASS=YOURPASSWORD
DB_NAME=YOURDATABASE
```

### 3. Server setup

In your terminal, `cd server` and run `npm install` to install server-packages.

Run `npm run migrate` to create all database tables.

Then, run `npm start` to start your back-end server.

### 4. Client setup

In a different terminal, `cd client` and run `npm install` to install client-side dependecies.

Then, `npm run dev` to run your client.

## Set up explained

### 1. Database

The database is currently set up to hard code 6 items and 3 users when you run `npm run migrate`.

### 2. Routes

Check the itemsController.js file in server > controllers and the index.js file in server > routes to see all routes already available to use. You can add more routes if needed using these two files.

### 3. Components

![Components layout](server/support/components-layout.png)

## Future extensions

Below are some ideas for feature extensions:

- Improved error control (e.g. new item form)
- Filter by type (borrow/request)
- Option to edit an item card, for example changing the title, description, image, etc.
- Authentication/option to register as a user and log in
- In-app messaging
- Option to create a neighbourhood and add users to it

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
