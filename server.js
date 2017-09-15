const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile.js')[environment];
const db = require('knex')(configuration);

app.set('port', process.env.PORT || 3001);

app.use(express.static(path.resolve(__dirname, './build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.title = 'Secret Box';
app.locals.secrets = {
  wowowow: 'I am a banana'
};

app.get('/', (request, response) => {
  response.status(200).sendFile(path.join(__dirname, './build', 'index.html'));
});

app.get('/api/item', (req, res) => {
  db('item')
  .select()
    .then(data => res.status(200).json({ data }))
    .catch(error => res.status(500).json({ error }));
})

app.post('/api/item', (req, res) => {
  const newItem = req.body;
  for (const requiredParam of ['name', 'reason', 'cleanliness']) {
    if (!req.body[requiredParam]) {
      return res.status(422).json(`Missing required parameter ${requiredParam}. Instead recieved '${Object.keys(req.body)}'.`);
    }
  }
  return db('item')
    .insert(newItem, 'id')
    .then(item => res.status(201).json({ id: item[0] }))
    .catch(error => res.status(500).json({ error }));
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;