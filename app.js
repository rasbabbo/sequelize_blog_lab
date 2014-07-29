var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  Person = require('./models/person'),
  app = express();
  



app.set("view engine", "ejs");


// Middleware
app.use(bodyParser.urlencoded());
app.use(methodOverride("_method"));
// app.use(express.static(_dirname + 'public'));


//get route for form:
    //post and author values;

//post route where values are saved


//get route for blog by date

// user/:id
  req.params.id

//

//
db.posts.findAll().success(function(author){
   res.render('index', {posts: post})
  })
});

