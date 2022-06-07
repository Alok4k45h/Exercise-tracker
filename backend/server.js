// Node.js: JavaScript run-time environment that executes JavaScript code outside of a browser (such as a server).
// Express: A fast and lightweight web framework for Node.js.
// MongoDB: A document-based open source database.
// nodemon makes development easier. It is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
// Importing and assigning express server to app
const express = require("express");
const app = express();

// Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
const cors = require("cors");

// Mongoose : a simple, schema(template)-based solution to model application data and makes interacting with MongoDB through Node.js simpler.
const mongoose = require("mongoose");

// dotenv loads environment variables from a .env file into process.env. This makes development simpler. Instead of setting environment variables on our development machine, they can be stored in a.env file
require("dotenv").config();

// Assigning the port value in port variable
const port = process.env.PORT || 5000;

// The cors package provides an Express middleware that can that can enable CORS with different options.
app.use(cors());
// express.json middleware : (since we will be sending and receiving json)
app.use(express.json());

// Connection Code
// useNewUrlParser: true is added because the MongoDB Node.js driver rewrote the tool it uses to parse MongoDB connection strings. Because this is such a big change, they put the new connection string parser behind a flag.
//useCreateIndex: true is similar to useNewUrlParser. It is to deal with MongoDB deprecating the ensureIndex() function.
const connection_url = process.env.ATLAS_URL;
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// The Below first two lines load the routers from other files. Then the routers are added as middleware (telling the server to use the files we just loaded)
// The server URL is https://localhost:5000. Now if you add “/exercises” or “/users” on the end it will load the endpoints defined in the corresponding router files.
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// the server listen on above defined port variable & display server port message
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
