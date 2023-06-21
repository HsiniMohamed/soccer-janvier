// import express module
const express = require("express");

//import body-parser module
const bodyParser = require("body-parser");

//import bcrypt module
const bcrypt = require("bcrypt");

//import muletr module
const multer = require("multer");

//import path module
const path = require("path");

//import axios module
const axios = require("axios");

// import mongoose module
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/chawkiBroDB");

//create application express
const app = express();

//Models Importation
const Match = require("./models/match");
const Team = require("./models/team");
const User = require("./models/user");
const Player = require("./models/player");

//application config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// shortCut
app.use("/myFiles", express.static(path.join("backend/images")));

//Media types
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});

//Db Simulation

let teamsTab = [
  { id: 1, name: "ca", owner: "bakey", stadium: "rades" },
  { id: 2, name: "cab", owner: "bizertin", stadium: "bizerte" },
  { id: 3, name: "css", owner: "dbebz", stadium: "tayeb mhiri" },
  { id: 4, name: "ess", owner: "papa", stadium: "sousse" },
];

function generateId(tab) {
  let max;
  if (tab.length == 0) {
    max = 0;
  } else {
    max = tab[0].id;
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].id > max) {
        max = tab[i].id;
      }
    }
  }
  return max + 1;
}

//Business Logic Matches Begin

//Business Logic: Get All Matches
app.get("/api/matches", (req, res) => {
  console.log("here in BL : Get All Matches");
  Match.find().then((docs) => {
    console.log("here documents", docs);
    res.status(200).json({ matches: docs, message: "Success" });
  });
});
//Business Logic: Get Match By Id
app.get("/api/matches/:id", (req, res) => {
  console.log("here in BL : Get Match By Id");
  let id = req.params.id;
  Match.findOne({ _id: id }).then((doc) => {
    res.status(200).json({ match: doc });
  });
});
//Business Logic: Delete Match By Id
app.delete("/api/matches/:id", (req, res) => {
  console.log("here in BL : Delete Match By Id");
  let id = req.params.id;
  Match.deleteOne({ _id: id }).then((result) => {
    console.log("here result", result);
    result.deletedCount == 1
      ? res.json({ message: " deleted with success" })
      : res.json({ message: "Id Not Found" });
  });
});
//Business Logic: Add Match
app.post("/api/matches", (req, res) => {
  console.log("here in BL : Add Match  ");
  let obj = new Match(req.body);
  obj.save();
  res.json({ message: "added with success" });
});
//Business Logic: Edit Match
app.put("/api/matches", (req, res) => {
  console.log("here in BL : Edit Match  ", req.body);
  let newMatch = req.body;
  Match.updateOne({ _id: newMatch._id }, newMatch).then((result) => {
    console.log("herer object after update", result);
    result.nModified == 1
      ? res.json({ message: " eidted with success" })
      : res.json({ message: "echec" });
  });
});

//Business Logic Matches End

//Business Logic Players End

//Business Logic Teams Begin

//Business Logic: Get All Teams
app.get("/api/teams", (req, res) => {
  console.log("here in BL : Get All Teams");
  res.status(200).json({ teams: teamsTab, message: "Success" });
});
//Business Logic: Get Team By Id
app.get("/api/teams/:id", (req, res) => {
  console.log("here in BL : Get Team By Id");
  let id = req.params.id;
  let findedTeam = teamsTab.find((elt) => {
    return elt.id == id;
  });
  res.status(200).json({ team: findedTeam });
});
//Business Logic: Delete Team By Id
app.delete("/api/teams/:id", (req, res) => {
  console.log("here in BL : Delete Team By Id");
  let id = req.params.id;
  let isFounded = false;
  for (let i = 0; i < teamsTab.length; i++) {
    if (teamsTab[i].id == id) {
      isFounded = true;
      teamsTab.splice(i, 1);
      break;
    }
  }
  isFounded
    ? res.json({ message: "success" })
    : res.json({ message: "Id Not Found" });
});
//Business Logic: Add Team
app.post("/api/teams", (req, res) => {
  console.log("here in BL : Add Team  ", req.body);
  let teamObject = new Team({
    teamName: req.body.name,
    teamOwner: req.body.owner,
    teamStadium: req.body.stadium,
  });
  teamObject.save((err, doc) => {
    console.log("here error", err);
    console.log("here doc", doc);
    err
      ? res.status(200).json({ message: "echec" })
      : res.status(200).json({ message: " added with success" });
  });
});
//Business Logic: Edit Team
app.put("/api/teams", (req, res) => {
  console.log("here in BL : Edit Player  ", req.body);
  for (let i = 0; i < teamsTab.length; i++) {
    if (teamsTab[i].id == req.body.id) {
      teamsTab[i] = req.body;
      res.status(200).json({ message: "added with success" });
      break;
    }
  }
});

//Business Logic Teams End

//Business Logic Signup
app.post(
  "/api/users/signup",
  multer({ storage: storageConfig }).single("avatar"),
  (req, res) => {
    console.log("here into signup", req.body);
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
      console.log("here cryptedPwd", cryptedPwd);
      req.body.pwd = cryptedPwd;
      req.body.avatar = `${req.protocol}://${req.get("host")}/myFiles/${
        req.file.filename
      }`;
      let userObj = new User(req.body);
      userObj.save((err, doc) => {
        err
          ? res.status(200).json({ message: "echec" })
          : res.status(200).json({ message: " added with success" });
      });
    });
  }
);

//Business Logic Login
//Email Error:0
//Password Error:1
//Success :2
app.post("/api/users/login", (req, res) => {
  let user;
  console.log("here into Bl Login", req.body);
  //Check if email exist
  User.findOne({ email: req.body.email })
    .then((doc) => {
      console.log("herer doc login", doc);
      user = doc;
      //Send  email Error msg
      if (!doc) {
        res.json({ msg: "0" });
      } else {
        //Check pwd
        return bcrypt.compare(req.body.pwd, doc.pwd);
      }
    })
    .then((isEqual) => {
      console.log("here is equal", isEqual);
      if (!isEqual) {
        res.json({ msg: "1" });
      } else {
        let userToSend = {
          userId: user._id,
          fName: user.firstName,
          lName: user.lastName,
          email: user.email,
        };
        res.json({ user: userToSend, msg: "2" });
      }
    });
});

//Business Logic: Get Profile By Email
app.get("/api/users/:email", (req, res) => {
  console.log("here in BL : Get Profile By Email", req.params.email);
  User.findOne({ email: req.params.email }).then((doc) => {
    res.json({ user: doc });
  });
});

//Bussiness Logic : Edit profile
app.put("/api/users", (req, res) => {
  User.updateOne({ _id: req.body._id }, req.body).then((response) => {
    if (response.nModified == 1) {
      res.json({ msg: "Edited With Success" });
    } else {
      res.json({ msg: "Not Edited" });
    }
  });
});

//Business Logic: Search Match By Score
app.get("/api/matches/:scoreOne/:scoreTwo", (req, res) => {
  console.log("here in BL : Search Match By Score");
  let scoreOne = req.params.scoreOne;
  let scoreTwo = req.params.scoreTwo;
  Match.find({ $or: [{ scoreOne: scoreOne }, { scoreTwo: scoreTwo }] }).then(
    (docs) => {
      console.log("here documents", docs);
      res.status(200).json({ matches: docs });
    }
  );
});

//Business Logic: Search weather By city

app.get("/api/weather/:city", (req, res) => {
  console.log("here in Bl :search weather", req.params.city);
  let key = "62ee756a34835483299877a61961cafb";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${key}&units=metric`;
  axios.get(apiURL).then((weatherResponse) => {
    console.log("here weatherResponse ", weatherResponse.data);
    let result = {
      temperature: weatherResponse.data.main.temp,
      pressure: weatherResponse.data.main.pressure,
      humidity: weatherResponse.data.main.humidity,
      icone: `https://openweathermap.org/img/wn/${weatherResponse.data.weather[0].icon}@2x.png`,
      description: weatherResponse.data.weather[0].description,
      sunrise: new Date(weatherResponse.data.sys.sunrise * 1000),
      sunset: new Date(weatherResponse.data.sys.sunset * 1000),
    };
    res.json({ result: result });
  });
});

//Business Logic: Add Player
app.post("/api/players", (req, res) => {
  console.log("here into Bl :add player", req.body);
  let player = new Player(req.body);
  player.save();
  res.json({ msg: "added with success" });
});

//Business Logic: Get all  Players
app.get("/api/players", (req, res) => {
  console.log("here into bl : get all player");
  Player.find().then((docs) => {
    res.json({ playersTab: docs });
  });
});

//Business Logic: Get   Player by Id
app.get("/api/players/:id", (req, res) => {
  console.log("here into bl : get player by id", req.params.id);
  Player.findOne({ _id: req.params.id }).then((doc) => {
    res.json({ player: doc });
  });
});

//Business Logic: Delete Player By Id
app.delete("/api/players/:id", (req, res) => {
  console.log("here in BL : Delete Player By Id");
  Player.deleteOne({ _id: req.params.id }).then((result) => {
    console.log("here result", result);
    result.deletedCount == 1
      ? res.json({ isDeleted: true })
      : res.json({ isDeleted: false });
  });
});

//Bussiness Logic: Update player
app.put("/api/players", (req, res) => {
  console.log("here into bl :edit player", req.body);
  Player.updateOne({ _id: req.body._id }, req.body).then((response) => {
    if (response.nModified == 1) {
      res.json({ msg: "OK" });
    } else {
      res.json({ msg: "Not OK" });
    }
  });
});

//make application exportable
module.exports = app;
