// Sets up the Express App
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Heroku being used for deployment

// Sets up the Express app to handle app/data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routing
require("./routes_folder/apiNotes")(app);
require("./routes_folder/htmlRoutes")(app);

// Posting the actual notes and takes in JSON input
app.post("/api/notes", function (req, res) {});

// Listen to this port here
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT); // Server is running
});
