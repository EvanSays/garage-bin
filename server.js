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

app.get('/api/item', (req, res) => {
  db('item')
  .select()
    .then(data => res.status(200).json({ data }))
    .catch(error => res.status(500).json({ error }));
})

// app.get('/', (request, response) => {
//   response.status(200).sendFile(path.join(__dirname, './build', 'index.html'));
// });

app.get('/api/secrets', (request, response) => {
  const secrets = app.locals.secrets;

  response.json({ secrets });
});


app.get('/api/secrets/:id', (request, response) => {
  const { id } = request.params;
  const message = app.locals.secrets[id];

  if (!message) { return response.sendStatus(404) };

  response.status(200).json({ id, message });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});