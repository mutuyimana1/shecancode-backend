import applicantRoute from "./Routes";

const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
app.use(bodyParser.json());
const dbUrl = process.env.DATABASE_URL;
mongoose.set("strictQuery", true);
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(console.log("database is connected"))
  .catch((err) => console.log(err));
// app.use("/", (req, res) => {
//   return res.status(202).json({
//     message: "welcome to shecancode application ",
//   });
// });
app.use("/api", applicantRoute);
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
export default app;
