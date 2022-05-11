const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  User = require("./models/User"),
  Item = require("./models/Item"),
  app = express(),
  cors = require("cors"),
  PORT = process.env.PORT || 4500;

mongoose
  .connect("mongodb://127.0.0.1:27017/Farm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongo.."))
  .catch((err) => console.log("Error\n %s", err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Server running" });
});
app.post("/signup", async (req, res) => {
  try {
    const newUser = await new User(req.body);
    await newUser.save();
    return res.send({ status: 200, message: "new User created successfully" });
  } catch (err) {
    return res.status(500).send({
      error: err,
    });
  }
});

app.get("/userInfo", async (req, res) => {
  const users = await User.find();
  res.json({ users_list: users });
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.exists({ email, password });
  // console.log(user);
  if (user) {
    User.findById(user._id, (err, u) => {
      if (u) {
        res.send({
          status: 200,
          data: {
            email: u.email,
            password: u.password,
            metamask_account: u.metamask_account,
          },
        });
      } else {
        return res.status(404).send({
          message: "Email or Password is incorrect",
        });
      }
    });
  } else {
    return res.status(404).send({
      message: "Email or Password is incorrect",
    });
  }
});

app.post("/rent", async (req, res) => {
  try {
    const newItem = await new Item(req.body);
    await newItem.save();
    return res.send({ status: 200, message: "new Item created successfully" });
  } catch (err) {
    return res.status(500).send({
      error: err,
    });
  }
});

app.get("/items", (req, res) => {
  Item.find({}, function (err, items) {
    res.json(items);
  });
});

app.listen(PORT, () => {
  console.log("Server listening at port:-", PORT);
});
