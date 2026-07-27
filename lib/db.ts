import { MongoClient, Db, Collection } from "mongodb";

// Palm Jebel Ali keeps its own isolated database on the shared cluster.
// It never touches the binayah_web_new_dev collections.
const DB_NAME = "palm_jebel_ali";

const uri = process.env.MONGODB_URI;

// Cache the client across hot-reloads (dev) and warm serverless invocations.
let clientPromise: Promise<MongoClient> | null =
  (global as { _pjaMongo?: Promise<MongoClient> })._pjaMongo || null;

export function hasDb(): boolean {
  return Boolean(uri);
}

async function getClient(): Promise<MongoClient> {
  if (!uri) throw new Error("MONGODB_URI is not set");
  if (!clientPromise) {
    clientPromise = new MongoClient(uri, {
      maxPoolSize: 5,
      serverSelectionTimeoutMS: 8000,
    }).connect();
    (global as { _pjaMongo?: Promise<MongoClient> })._pjaMongo = clientPromise;
  }
  return clientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClient();
  return client.db(DB_NAME);
}

export type LeadDoc = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  pageUrl: string;
  emailed: boolean;
  ip?: string;
  userAgent?: string;
  createdAt: Date;
};

export type EventDoc = {
  name: string;
  props: Record<string, unknown>;
  pageUrl: string;
  referrer?: string;
  ip?: string;
  userAgent?: string;
  createdAt: Date;
};

export async function leadsCollection(): Promise<Collection<LeadDoc>> {
  const db = await getDb();
  return db.collection<LeadDoc>("leads");
}

export async function eventsCollection(): Promise<Collection<EventDoc>> {
  const db = await getDb();
  return db.collection<EventDoc>("events");
}
