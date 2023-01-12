const express = require('express');

const app = express();

app.get('/:address', (req, res) => {
  const { address } = req.params;
  const lastTransactionTime = new Date().getTime() - 60;
  res.send({ lastTransactionTime });
});

app.listen(3030, () => {
  console.log('App Started');
});
