import { pgTable, uuid, text, boolean, timestamp } from 'drizzle-orm/pg-core';

/**
 * Lead submissions — contact / consultation / appointment forms.
 * We keep a copy of every submission here; Zoho automation (added later)
 * handles the email replies. Admin staff view these in the dashboard.
 */
export const leads = pgTable('leads', {
  id: uuid('id').defaultRandom().primaryKey(),
  // 'consultation' (home/short form) or 'contact' (extended: + qualification & country)
  formType: text('form_type').notNull().default('consultation'),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  levelOfStudy: text('level_of_study'),
  currentQualification: text('current_qualification'),
  preferredCountry: text('preferred_country'),
  message: text('message'),
  source: text('source'), // page path the form was submitted from
  status: text('status').notNull().default('new'), // new | contacted | archived
  // Zoho forwarding bookkeeping (forwarding wired once the endpoint is provided)
  zohoSynced: boolean('zoho_synced').notNull().default(false),
  zohoSyncedAt: timestamp('zoho_synced_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

/**
 * Newsletter subscribers. No newsletter form is live yet, but the table is
 * ready so the admin dashboard can list subscribers once one is added.
 */
export const newsletterSubscribers = pgTable('newsletter_subscribers', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  status: text('status').notNull().default('subscribed'), // subscribed | unsubscribed
  source: text('source'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

/**
 * Admin users for the dashboard (multi-user with roles).
 * Auth is built in the next milestone; the table lives here now so the
 * schema is complete. Passwords are stored hashed (never plaintext).
 */
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  passwordHash: text('password_hash').notNull(),
  role: text('role').notNull().default('editor'), // admin | editor
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
export type User = typeof users.$inferSelect;
