import React from 'react';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { YouTubeFacade } from '../ui/YouTubeFacade';

// CEO message video (youtu.be/fZDNEShwZGM).
const CEO_VIDEO_ID = 'fZDNEShwZGM';

type Point = { title: string; desc: string; icon: React.ReactNode };

const aboutPoints: Point[] = [
  {
    title: 'Who We Are',
    desc: 'Study Abroad (Pvt) Ltd is a trusted study abroad consultancy in Sri Lanka, supporting students with personalized international education guidance since 2007.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />,
  },
  {
    title: 'Our Mission',
    desc: 'To provide unwavering support and guidance to individuals seeking the right path in the pursuit of higher education abroad.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />,
  },
  {
    title: 'Personalized Counseling',
    desc: 'We provide one-to-one guidance for students and families, helping them choose suitable courses, destinations, and universities based on their goals, eligibility, timelines, and financial readiness.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.596.596 0 01-.474-.065.598.598 0 01-.251-.447c-.03-.284-.045-.57-.045-.856 0-1.28.532-2.436 1.393-3.294C5.174 15.144 5.1 13.61 5.1 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />,
  },
  {
    title: 'Global University Network',
    desc: 'Our institution network spans the UK, USA, Canada, New Zealand, Sweden, Germany, the Netherlands, and Europe, giving students access to a wide range of reputable study options.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />,
  },
  {
    title: 'Why Students Choose Us',
    desc: 'Students and families choose us for our experience, expertise, and reliability. Since 2007, our reputation has grown through student referrals, parent confidence, careful documentation, and consistent visa guidance.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
  },
  {
    title: 'Our Approach',
    desc: 'We guide every student with a structured, student-first process focused on informed decision-making, suitable placements, accurate documentation, and preparation for successful international study.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75L15 3v14.25l-6 3.75V6.75zm6-3.75l6 3.75v14.25l-6-3.75V3zM3 6.75l6-3.75v14.25l-6 3.75V6.75z" />,
  },
];

const values: Point[] = [
  {
    title: 'What You Gain',
    desc: 'Clear guidance, suitable study options, careful preparation, and dependable support at every stage.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.25-9.75h16.5" />,
  },
  {
    title: 'Our Commitment',
    desc: 'We help students access quality global education through ethical advice, personalized pathways, and trusted professional service.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
  },
  {
    title: 'Application and Visa Support',
    desc: 'From university applications to visa preparation, we guide students through a structured process focused on accuracy, timelines, and compliance.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />,
  },
  {
    title: 'Post-Arrival Support',
    desc: 'We support students with travel preparation, accommodation guidance, cultural orientation, and a smoother transition to life abroad.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L6 12zm0 0h7.5" />,
  },
];

const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    {children}
  </svg>
);

const PointCard = ({ point }: { point: Point }) => (
  <Card className="h-full">
    <div className="flex items-start gap-4">
      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-105">
        <Icon>{point.icon}</Icon>
      </span>
      <div>
        <h3 className="mb-1.5 text-lg font-semibold text-slate-900 transition-colors group-hover:text-brand-700">{point.title}</h3>
        <p className="text-[15px] leading-relaxed text-slate-600">{point.desc}</p>
      </div>
    </div>
  </Card>
);

const purpose = [
  {
    title: 'Our Vision',
    text: 'To be the leading and most reliable educational counseling and student recruitment firm in Asia.',
  },
  {
    title: 'Our Mission',
    text: 'To provide unwavering support and guidance to individuals seeking the right path in their pursuit of higher education abroad.',
  },
];

const AboutContent: React.FC = () => {
  return (
    <>
      {/* Intro + points */}
      <Section bg="white">
        <Reveal className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-2xl font-medium leading-snug tracking-tight text-slate-900 md:text-3xl">
            Welcome to Study Abroad (Pvt) Ltd
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Your trusted partner for international education in Sri Lanka. Since 2007, Study Abroad (Pvt) Ltd has guided
            students and families with reliable study abroad counseling, best-fit university placement, visa guidance,
            documentation support, language and cultural orientation, and post-arrival assistance.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {aboutPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="h-full">
              <PointCard point={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Leadership — CEO video message */}
      <Section bg="subtle">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">Leadership</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Priyanka Ganhataregedara
          </h2>
          <p className="mt-1 font-medium text-brand-600">Founder &amp; Managing Director / CEO</p>
          <div className="mx-auto mt-8 max-w-3xl">
            <YouTubeFacade videoId={CEO_VIDEO_ID} title="Message from our Founder / Managing Director" />
          </div>
        </Reveal>
      </Section>

      {/* Vision & Mission */}
      <Section bg="white">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <Eyebrow className="justify-center">Our Purpose</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Vision &amp; Mission
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {purpose.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="relative overflow-hidden rounded-2xl bg-brand-900 p-8 lg:p-10">
              <svg className="absolute right-4 top-4 h-16 w-16 text-white/5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.987z" />
              </svg>
              <h3 className="relative text-xl font-semibold text-white md:text-2xl">{p.title}</h3>
              <p className="relative mt-3 text-[15px] leading-relaxed text-slate-300 md:text-base">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values & Commitment */}
      <Section bg="subtle">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <Eyebrow className="justify-center">What Sets Us Apart</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Complete Study Abroad Support, From Start to Settlement
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Since 2007, Study Abroad (Pvt) Ltd has helped Sri Lankan students move forward with confidence through
            expert counseling, reliable documentation guidance, and end-to-end support for their international
            education journey.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {values.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="h-full">
              <PointCard point={p} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutContent;
