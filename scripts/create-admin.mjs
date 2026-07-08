// Create (or reset) an admin user.
// Usage: node scripts/create-admin.mjs <email> <password> [name] [role]
//   role: "admin" (default) or "editor"
// Re-running with an existing email updates that user's name/password/role.
import { config } from 'dotenv';
import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcryptjs';

config({ path: '.env.local' });

const [email, password, name = 'Admin', role = 'admin'] = process.argv.slice(2);

if (!email || !password) {
  console.error('Usage: node scripts/create-admin.mjs <email> <password> [name] [role]');
  process.exit(1);
}
if (!['admin', 'editor'].includes(role)) {
  console.error('Role must be "admin" or "editor".');
  process.exit(1);
}
if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set (check .env.local).');
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);
const passwordHash = await bcrypt.hash(password, 10);
const emailLc = email.trim().toLowerCase();

try {
  const rows = await sql`
    INSERT INTO users (email, name, password_hash, role)
    VALUES (${emailLc}, ${name}, ${passwordHash}, ${role})
    ON CONFLICT (email)
      DO UPDATE SET name = EXCLUDED.name, password_hash = EXCLUDED.password_hash, role = EXCLUDED.role
    RETURNING id, email, name, role, created_at
  `;
  console.log('Admin user ready:', rows[0]);
} catch (e) {
  console.error('Failed:', e.message);
  process.exit(1);
}
