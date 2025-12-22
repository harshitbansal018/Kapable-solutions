import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient> | null = null

function createClientPromise() {
  if (!uri) {
    throw new Error("Please add your MongoDB URI to environment variables")
  }

  if (process.env.NODE_ENV === "development") {
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>
    }

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options)
      globalWithMongo._mongoClientPromise = client.connect()
    }
    return globalWithMongo._mongoClientPromise
  } else {
    client = new MongoClient(uri, options)
    return client.connect()
  }
}

export default function getClientPromise() {
  if (!clientPromise) {
    clientPromise = createClientPromise()
  }
  return clientPromise
}
