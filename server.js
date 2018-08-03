const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use('/listings/:id', express.static('public'));

app.get('/api/house/:id', (req, res) => {
  const data = req.params;
  const id = parseInt(data.id);
  axios.get(`http://ec2-18-222-220-204.us-east-2.compute.amazonaws.com/api/house/${id}/`)
    .then( ({data}) => { 
      console.log('sending data from house description');
      res.status(200).send(data);
    })
    .catch( err => {
      res.status(400).send(err);
    })
});

app.get('/api/listings/:id/photos', (req, res) => {
    const data = req.params;
    const id = parseInt(data.id);
    axios.get(`http://ec2-13-59-102-97.us-east-2.compute.amazonaws.com/api/listings/${id}/photos`)
      .then( ({data}) => { 
        console.log('sending data from photo carousel');
        res.status(200).send(data);
      })
      .catch( err => {
        res.status(400).send(err);
      })
  });



app.listen(3000, () => console.log('Example app listening on port 3000!'))