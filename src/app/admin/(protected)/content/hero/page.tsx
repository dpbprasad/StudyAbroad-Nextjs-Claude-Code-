import { readHeroContent } from '../../../../../lib/content';
import { HeroForm } from './HeroForm';

export const dynamic = 'force-dynamic';

export default async function HeroContentPage() {
  const hero = await readHeroContent();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Homepage Hero</h1>
        <p className="mt-1 text-sm text-slate-500">
          The headline and paragraph at the very top of the home page. Changes go live immediately.
        </p>
      </div>

      <section className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <HeroForm heading={hero.heading} paragraph={hero.paragraph} />
      </section>
    </div>
  );
}
