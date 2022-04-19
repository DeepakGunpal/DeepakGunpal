const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Application-level middleware

app.use((req, res, next) => {
  const date = new Date();
  console.log("Time:", date, req.ip, req.path);
  next();
});

mongoose
  .connect(
    "mongodb+srv://DeepakGunpal:hdg5NWwcvf2wUDTN@deepakcluster0.hynna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
