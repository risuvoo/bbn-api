const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_SERVER)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => console.log("Mongodb Connection Failed"));

console.log(process.env.MONGODB_SERVER);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
