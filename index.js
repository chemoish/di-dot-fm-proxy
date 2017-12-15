const express = require('express');
const forceSsl = require('force-ssl-heroku');
const request = require('request');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(forceSsl)

app.get('/:channel', (req, res) => {
  const url = `http://prem1.di.fm:80/${req.params.channel}?${req.query.code}`;

  const proxyRequest = request(url);

  req.pipe(proxyRequest);

  proxyRequest.pipe(res);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
