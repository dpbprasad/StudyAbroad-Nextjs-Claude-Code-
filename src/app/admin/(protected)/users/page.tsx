import { desc } from 'drizzle-orm';
import { requireAdmin } from '../../../../lib/auth';
import { db } from '../../../../lib/db';
import { users } from '../../../../lib/db/schema';
import { formatDate } from '../../../../lib/format';
import { CreateUserForm } from './CreateUserForm';
import { UserRow } from './UserRow';

export const dynamic = 'force-dynamic';

export default async function UsersPage() {
  const session = await requireAdmin();
  const all = await db.select().from(users).orderBy(desc(users.createdAt));
  const adminCount = all.filter((u) => u.role === 'admin').length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Staff accounts</h1>
        <p className="mt-1 max-w-2xl text-sm text-slate-500">
          Admins manage everything (including users); editors can view leads &amp; subscribers and edit
          content. You can&apos;t remove the last admin or delete your own account.
        </p>
      </div>

      <section className="max-w-2xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-semibold text-slate-900">Add a user</h2>
        <p className="mt-1 text-sm text-slate-500">
          Set a temporary password and share it with them — they can change it under Account.
        </p>
        <div className="mt-4">
          <CreateUserForm />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900">Users ({all.length})</h2>
        <ul className="space-y-3">
          {all.map((u) => (
            <UserRow
              key={u.id}
              id={u.id}
              name={u.name}
              email={u.email}
              role={u.role === 'admin' ? 'admin' : 'editor'}
              created={formatDate(u.createdAt)}
              currentUserId={session.sub}
              adminCount={adminCount}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
