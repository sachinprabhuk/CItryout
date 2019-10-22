const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // db access
  const data = {
    fname: "sachin",
    lname: "prabhu"
  };
  res.json(data);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening to port " + (process.env.PORT || 3000));
});

module.exports = app;
