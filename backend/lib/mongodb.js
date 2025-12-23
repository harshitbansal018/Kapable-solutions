const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise = null;

function createClientPromise() {
  if (!uri) {
    throw new Error("Please add your MongoDB URI to environment variables");
  }

  if (process.env.NODE_ENV === "development") {
    if (!globalThis._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalThis._mongoClientPromise = client.connect();
    }
    return globalThis._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    return client.connect();
  }
}

function getClientPromise() {
  if (!clientPromise) {
    clientPromise = createClientPromise();
  }
  return clientPromise;
}

module.exports = getClientPromise;