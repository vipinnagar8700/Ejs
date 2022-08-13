const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => res.send('Hello World'));
app.get('/home', function(req, res) {
    // prepare characters 
var characters = [
    {
      name: 'Harry',
      designation: "Student"
    },
    {
      name: 'Dumbledore',
      designation: "Headmaster"
    },
    {
      name: 'Snape',
      designation: "Professor"
    },
    {
      name: 'Hermione',
      designation: "Student"
    }
     ];
    //prepare subheading
  var subheading = "my name is vipin";


// provide data to index js in the form of keys and values 
res.render('index',{characters: characters,
subheading: subheading});

});
app.listen(4000, () => console.log('Listening on port 4000!'));
