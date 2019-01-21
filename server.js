//establishes a connnection to the data-base (in config/DB.js) via express and mongoose
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');

    const app = express();

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
    const adUnitRoutes = require('./routes/adunit.route');
    const UserRoutes = require('./routes/user.route');
    const projectRoutes = require('./routes/project.route');
    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000 ;
   
    //configure app to use all routes from collections
    app.use('/adunits', adUnitRoutes);
    app.use('/user', UserRoutes);
    app.use('/projects', projectRoutes);
    
    //listen to port 4000 (where data is stored, compare AdUnitservice: 'http://localhost:4000/adunits')
    const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
    });
    