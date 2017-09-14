const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, './build')));

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Secret Box';
app.locals.secrets = {
  wowowow: 'I am a banana'
};

app.get('/', (request, response) => {
  response.status(200).sendFile(path.join(__dirname, './build', 'index.html'));
});

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