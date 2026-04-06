// Import the express module - load express lib
let express = require("express"); //create express app

// Initialize an express application
//creates server app
let app = express();

// Set EJS as the templating engine - render views 
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
// This makes CSS, JS, images, etc. accessible from the browser
app.use(express.static("public"));

// Define a route for the root URL ('/')
// This renders the homepage.ejs view
app.get("/", function (req, res) {
  return res.render("homepage");
});

// Start the server on port 3000
app.listen(3000, function () {
  console.log("Server Started at http://localhost:3000");
  console.log("Press Ctrl+C to stop the server");
});

// Log a message to indicate that the server.js file is being executed
console.log("Express server.js is running...");
