const express = require('express');
const App = module.exports = express();
require('pmx').init({
  http : true,
  errors : true,
  custom_probes : true,
  network : true,
  ports : true
});
const countingMetricMiddleware = require('./middleware/countMetric.js');

App.use( countingMetricMiddleware );

App.get('/health', (req, res) => {
  res.status(200).json({ succes : true })
});

const Server = App.listen(3000, function() {
  const host = Server.address().address;
  const port = Server.address().port;
  console.log(`PMX example app listening ${host}:${port}`);
});
