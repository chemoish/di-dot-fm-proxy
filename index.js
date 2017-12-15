const express = require('express');
const request = require('request');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/:channel', (req, res) => {
  const url = `http://prem1.di.fm:80/${req.params.channel}?${req.query.code}`;

  const proxyRequest = request(url);

  req.pipe(proxyRequest);

  proxyRequest.pipe(res);
});

app.listen(3000, () => console.log(`Server running on port ${PORT}.`));
