const express = require("express");
const { PORT, MongoDbUrl } = require("./config.js");
const { default: mongoose } = require("mongoose");
const { Book } = require("./models/bookModel.js");
const cors = require("cors");

const app = express();
app.use(cors());

const { router: booksRoute } = require("./routes/booksRoute.js");
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);

  return response.status(234).send("Hello op phoder");
});

//route for save a new book
app.use('/books', booksRoute); 
mongoose
  .connect(MongoDbUrl)
  .then(() => {
    console.log("App connected to database");

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
