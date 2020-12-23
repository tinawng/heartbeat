import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
mongoose.set('useNewUrlParser', true);      // deprecation warning
mongoose.set('useUnifiedTopology', true);   // deprecation warning
mongoose.set('useCreateIndex', true);       // deprecation warning
mongoose.set('useFindAndModify', false);    // deprecation warning
mongoose.set('returnOriginal', false);

const db_heartbeats = mongoose.createConnection('mongodb://' + process.env.MONGODB_HOST + '/heartbeats');
export { db_heartbeats }