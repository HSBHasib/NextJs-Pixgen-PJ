import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('pixgen');

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),

  // Google
  socialProviders: {
    google: { 
        clientId: process.env.GOOGLE_CLIENT_ID, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    }, 
  },

  // Github
  socialProviders: {
    github: { 
        clientId: process.env.GITHUB_CLIENT_ID, 
        clientSecret: process.env.GITHUB_CLIENT_SECRET, 
    }, 
  },
});
