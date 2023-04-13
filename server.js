require("dotenv").config();
const express = require('express');

const app = express();

const connectToDB = require("./config/db");

const Flight = require('./models/Flight');

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.use(express.urlencoded({extended: false}))

app.get("/home", (req, res) => {
res.send("<h1> Welcome to Flight App </h1>")
})

app.get("/flightform", (req, res) => {
res.render("New")
})

app.get("/ticket", (req, res) => {
    //* Using operator to filter queries
    Flight.find({ flightNo: { $lte: 100 } })
      // if database transaction succeeds
      .then((flights) => {
        res.send(flights);
      })
      // if database transaction fails
      .catch((error) => {
        console.log(error);
      });
  });

app.use((req, res, next) => {
    // console.log(req.url)
    next()
})

app.get("/flight", (req, res) => {
    Flight.find({}, (error, allFlights) => {
        res.render("Index", { flights: allFlights });
    });
})

app.post("/flight", (req, res) => {    
            Flight.create(req.body, (error, createdFlight) => {
                res.redirect("/flight");
            });

        })
    

app.get('*', (req, res) => {
    res.redirect("/home")
})


app.listen(3000, () => {
    console.log('Server is running')
    connectToDB();
})