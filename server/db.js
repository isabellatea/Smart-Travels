var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 mongoose.connect('mongodb://localhost/smart-travels');

 mongoose.connection.once('open', () => {
     console.log('database is connected');
 });

 mongoose.connection.on('error', (error) => {
     console.log('Error: ', error);
 });

// some schema

// export schema

