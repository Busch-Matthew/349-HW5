const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Add middleware to authenticate requests


// build multiple CRUD interfaces:
app.get('/:id', (req, res) =>{
  res.send('smile');
});

app.post('/:id', (req, res) =>{ 
  console.log(req.body)
   const writeResult =  db.collection('orders').doc(req.body.emailAddress).set(req.body);
   res.json({result:`Message with ID: ${writeResult.coffee} added.`});
});

app.delete('/:id', (req, res) =>{
  const order = req.params.id
  console.log(req.params.id)
  const writeResult = db.collection('orders').doc(order).delete()
   
  res.send('deleted.')
});

app.get('/', async (req, res) => {
   snapshot = await db.collection('orders').get()
    const collection = {}
   snapshot.forEach(doc => {
    collection[doc.id] = doc.data();
    });
    console.log(collection)
  res.send(collection);
});

// Expose Express API as a single Cloud Function:
exports.orders = functions.https.onRequest(app);
