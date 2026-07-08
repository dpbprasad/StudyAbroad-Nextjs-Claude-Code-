import { readContact } from '../../../../../lib/content';
import { ContactForm } from './ContactForm';

export const dynamic = 'force-dynamic';

export default async function ContactPage() {
  const contact = await readContact();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Contact details</h1>
        <p className="mt-1 text-sm text-slate-500">
          Shown in the footer, the contact section, and your site&apos;s search-engine listing. Changes go live across the site.
        </p>
      </div>

      <section className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <ContactForm contact={contact} />
      </section>
    </div>
  );
}
