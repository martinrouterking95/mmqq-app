// user.route.js
const express = require('express');
const app = express();
const UserRoutes = express.Router();

// Require User model in our routes module
let User = require('../models/User');

// Defined store route
UserRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(game => {
    res.status(200).json({'user': 'User in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
UserRoutes.route('/').get(function (req, res) {
    User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

// Defined edit route
UserRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

//  Defined update route
UserRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.login_name = req.body.login_name;
        user.password = req.body.password;

        user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
UserRoutes.route('/delete/:id').get(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = UserRoutes;