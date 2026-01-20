import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

if (!uri) throw new Error("❌ MONGO_URI missing in environment");
if (!dbName) throw new Error("❌ DB_NAME missing in environment");

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    global._mongoClient = client.connect();
  }
  clientPromise = global._mongoClient;
} else {
  clientPromise = client.connect();
}

export async function dbConnect(collectionName) {
  const conn = await clientPromise;
  const db = conn.db(dbName);
  return db.collection(collectionName);
}
