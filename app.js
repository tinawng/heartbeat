import autocannon from 'autocannon';
import dotenv from 'dotenv';
dotenv.config();

import heartbeat_model from './model/Heartbeat.js';


(function main() {

  autocannon({
    url: 'https://www.arturia.com/freegift-chorus-jun6',
    connections: 1,
    amount: 20
  }, log)

  setTimeout(main, 60000);
}());


function log(err, result) {
  // 'errors' is reserved schema names
  result.error = result.errors
  delete result.errors

  const heartbeat = new heartbeat_model(result)
  heartbeat.save();
}
