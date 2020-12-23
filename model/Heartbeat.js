// https://mongoosejs.com/docs/guide.html

import mongoose from 'mongoose';
import { db_heartbeats } from '../mongoose.config.js';

const Schema = mongoose.Schema;

let heartbeat_schema = new Schema({
  "url": String,
  "connections": Number,
  "pipelining": Number,
  "duration": Number,
  "start": Date,
  "finish": Date,
  "error": Number,
  "timeouts": Number,
  "mismatches": Number,
  "non2xx": Number,
  "resets": Number,
  '1xx': Number,
  '2xx': Number,
  '3xx': Number,
  '4xx': Number,
  '5xx': Number,
  "latency": Schema.Types.Mixed
},
  {
    collection: 'heartbeats'
  }
)

export default db_heartbeats.model('Heartbeat', heartbeat_schema);