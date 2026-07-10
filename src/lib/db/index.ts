import { drizzle, type NeonHttpDatabase } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

// Neon's HTTP driver — stateless, ideal for serverless/edge (Netlify functions).
//
// When DATABASE_URL is absent (e.g. a front-end-only deploy with no database
// provisioned), `db` is undefined. Every caller wraps its queries in try/catch
// and falls back to safe defaults, so the public site still builds and renders
// with no database. Configure DATABASE_URL to enable the backend.
const url = process.env.DATABASE_URL;
export const db = (url ? drizzle(neon(url), { schema }) : undefined) as NeonHttpDatabase<typeof schema>;
export { schema };
