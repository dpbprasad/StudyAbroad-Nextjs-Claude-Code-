"use client";

import React, { useRef, useState } from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

const levelOptions = [
  { value: 'Foundation', label: 'Foundation / Certificate' },
  { value: 'Diploma', label: 'Diploma' },
  { value: 'Undergraduate', label: "Undergraduate (Bachelor's)" },
  { value: 'Postgraduate', label: "Postgraduate (Master's)" },
  { value: 'PhD', label: 'PhD / Doctorate' },
  { value: 'Language', label: 'Language / Short course' },
  { value: 'Other', label: 'Other' },
];

const qualificationOptions = [
  { value: 'O/L', label: 'GCE O/L' },
  { value: 'A/L', label: 'GCE A/L' },
  { value: 'Diploma', label: 'Diploma' },
  { value: "Bachelor's", label: "Bachelor's Degree" },
  { value: "Master's", label: "Master's Degree" },
  { value: 'Other', label: 'Other' },
];

const countryOptions = [
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'Canada', label: 'Canada' },
  { value: 'USA', label: 'United States' },
  { value: 'Australia', label: 'Australia' },
  { value: 'New Zealand', label: 'New Zealand' },
  { value: 'Germany', label: 'Germany' },
  { value: 'Netherlands', label: 'Netherlands' },
  { value: 'Sweden', label: 'Sweden' },
  { value: 'Other', label: 'Other / Not sure yet' },
];

const initialForm = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  levelOfStudy: '',
  currentQualification: '',
  preferredCountry: '',
  message: '',
};

type FormState = typeof initialForm;
type Errors = Partial<Record<keyof FormState, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ConsultationForm({ extended = false }: { extended?: boolean }) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const honeypotRef = useRef<HTMLInputElement>(null); // spam trap — humans never fill this

  const set =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.firstName.trim()) e.firstName = 'Please enter your first name';
    if (!form.lastName.trim()) e.lastName = 'Please enter your last name';
    if (!form.phone.trim()) e.phone = 'Please enter your contact number';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.levelOfStudy) e.levelOfStudy = 'Please select your intended level of study';
    if (extended && !form.currentQualification)
      e.currentQualification = 'Please select your current qualification';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('submitting');
    try {
      // Store the lead in our backend. Zoho forwarding + email replies are
      // handled server-side (added once the Zoho endpoint is provided).
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: extended ? 'contact' : 'consultation',
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          email: form.email,
          levelOfStudy: form.levelOfStudy,
          currentQualification: form.currentQualification,
          preferredCountry: form.preferredCountry,
          message: form.message,
          company: honeypotRef.current?.value ?? '', // honeypot, checked server-side
          source: typeof window !== 'undefined' ? window.location.pathname : undefined,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-brand-50 p-10 text-center ring-1 ring-brand-100">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">Thank you!</h3>
        <p className="mt-2 max-w-sm text-slate-600">
          Your details are with our team. We'll be in touch shortly to plan your consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot anti-spam field — off-screen, hidden from humans, bots fill it */}
      <input
        ref={honeypotRef}
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="First name" name="firstName" required value={form.firstName} onChange={set('firstName')} error={errors.firstName} autoComplete="given-name" />
        <Input label="Last name" name="lastName" required value={form.lastName} onChange={set('lastName')} error={errors.lastName} autoComplete="family-name" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Contact number" name="phone" type="tel" required value={form.phone} onChange={set('phone')} error={errors.phone} autoComplete="tel" />
        <Input label="Email" name="email" type="email" required value={form.email} onChange={set('email')} error={errors.email} autoComplete="email" />
      </div>

      <Select
        label="Intended level of study"
        name="levelOfStudy"
        required
        placeholder="Select an option"
        options={levelOptions}
        value={form.levelOfStudy}
        onChange={set('levelOfStudy')}
        error={errors.levelOfStudy}
      />

      {extended && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Select
            label="Current highest qualification"
            name="currentQualification"
            required
            placeholder="Select an option"
            options={qualificationOptions}
            value={form.currentQualification}
            onChange={set('currentQualification')}
            error={errors.currentQualification}
          />
          <Select
            label="Preferred country (optional)"
            name="preferredCountry"
            placeholder="Select an option"
            options={countryOptions}
            value={form.preferredCountry}
            onChange={set('preferredCountry')}
          />
        </div>
      )}

      <Textarea label="Message (optional)" name="message" rows={4} value={form.message} onChange={set('message')} placeholder="Tell us briefly what you'd like help with…" />

      {status === 'error' && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200">
          Something went wrong. Please try again, or email info@studyabroad.lk.
        </p>
      )}

      <div className="pt-1">
        <Button type="submit" disabled={status === 'submitting'} className="w-full sm:w-auto">
          {status === 'submitting' ? 'Sending…' : 'Book a Consultation'}
        </Button>
      </div>
    </form>
  );
}
