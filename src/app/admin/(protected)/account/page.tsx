import { requireSession } from '../../../../lib/auth';
import { ChangePasswordForm } from './ChangePasswordForm';

export const dynamic = 'force-dynamic';

export default async function AccountPage() {
  const session = await requireSession();

  return (
    <div className="max-w-lg space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Your account</h1>
        <p className="mt-1 text-sm text-slate-500">
          {session.name} · {session.email} · <span className="capitalize">{session.role}</span>
        </p>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-semibold text-slate-900">Change password</h2>
        <div className="mt-4">
          <ChangePasswordForm />
        </div>
      </section>
    </div>
  );
}
