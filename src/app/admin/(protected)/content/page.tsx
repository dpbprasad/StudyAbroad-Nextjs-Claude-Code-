import { readHeroContent } from '../../../../lib/content';
import { HeroForm } from './HeroForm';

export const dynamic = 'force-dynamic';

export default async function ContentPage() {
  const hero = await readHeroContent();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Website content</h1>
        <p className="mt-1 text-sm text-slate-500">
          Edit text shown on the public site. Changes go live immediately.
        </p>
      </div>

      <section className="max-w-2xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-semibold text-slate-900">Homepage hero</h2>
        <p className="mt-1 text-sm text-slate-500">
          The headline and paragraph at the very top of the home page.
        </p>
        <div className="mt-5">
          <HeroForm heading={hero.heading} paragraph={hero.paragraph} />
        </div>
      </section>
    </div>
  );
}
