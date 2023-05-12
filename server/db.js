const firebase = require('firebase-admin');
const config = require('./config');
const credconfig = require('./credconfig');

const db = firebase.initializeApp({
    ...(config.firebaseConfig),
    credential: firebase.credential.cert(credconfig.json)
});

module.exports = db;