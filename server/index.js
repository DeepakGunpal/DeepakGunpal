const express = require("express");
const app = express()
const mongoose = require("mongoose");
const router = require('./src/routes/fileRoutes')
require('dotenv').config();
const cors = require('cors')
const session = require('express-session');
const passport = require("passport");



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", 1);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
    }
  }))


app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 4000

mongoose.connect("mongodb+srv://DeepakGunpal:hdg5NWwcvf2wUDTN@deepakcluster0.hynna.mongodb.net", {
  useNewUrlParser: true
})
  .then(() => app.listen(PORT, () => console.log(`Live on ${PORT}`)))

app.use('/', router)