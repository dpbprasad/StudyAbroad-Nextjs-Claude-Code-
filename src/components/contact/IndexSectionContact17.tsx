import React from 'react';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { ConsultationForm } from '../forms/ConsultationForm';

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.942-6.942l1.293-.97c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const IndexSectionContact17: React.FC = () => {
  return (
    <Section bg="subtle">
      <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
        <Eyebrow className="justify-center">Contact Us</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
          Book Your Free Consultation
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Form */}
        <div className="rounded-2xl bg-white p-6 shadow-card-md ring-1 ring-slate-200 sm:p-8">
          <ConsultationForm />
        </div>

        {/* Info + map */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <a
              href="https://maps.app.goo.gl/PLTg8veRcFbykqZe6"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <PinIcon />
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Visit Us</h3>
                <p className="mt-0.5 text-[15px] leading-relaxed text-slate-600 transition-colors group-hover:text-brand-700">
                  No. 109, Kirulapone Avenue, Colombo 05, 00500, Sri Lanka.
                </p>
              </div>
            </a>

            <a href="tel:+94774963373" className="group flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <PhoneIcon />
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Call Us</h3>
                <p className="mt-0.5 text-[15px] text-slate-600 transition-colors group-hover:text-brand-700">+94 77 496 3373</p>
              </div>
            </a>

            <a href="mailto:info@studyabroad.lk" className="group flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <MailIcon />
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Email Us</h3>
                <p className="mt-0.5 text-[15px] text-slate-600 transition-colors group-hover:text-brand-700">info@studyabroad.lk</p>
              </div>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <iframe
              title="Study Abroad Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d856.1196523343524!2d79.87535153294604!3d6.882799655025724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a499c9a76f7%3A0xd83d8fafe5dab54c!2sStudy%20Abroad%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1780985744062!5m2!1sen!2slk"
              className="h-[280px] w-full border-0 lg:h-[340px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default IndexSectionContact17;
