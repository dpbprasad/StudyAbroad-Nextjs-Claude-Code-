import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

// drizzle-kit runs standalone (outside Next.js), so load the local env file.
config({ path: '.env.local' });

export default defineConfig({
  schema: './src/lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
