"use client";

import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

/* ------------------------------------------------------------------ *
 * Zoho CRM "Web-to-Lead" config — PENDING values from the Zoho team.
 * Fill these in once Zoho generates the Web-to-Lead form. Until then,
 * the form validates and shows a "call/email us" notice (no lead is
 * silently lost). See design.md §11 (Contact).
 * ------------------------------------------------------------------ */
const ZOHO = {
  actionUrl: '', // e.g. https://crm.zoho.com/crm/WebToLeadForm  (region-specific)
  hidden: {
    xnQsjsdp: '',
    xmIwtLD: '',
    actionType: '', // base64 of "Leads"
  },
  // Map our fields → the field names Zoho expects (from the generated webform)
  fields: {
    firstName: 'First Name',
    lastName: 'Last Name',
    phone: 'Phone',
    email: 'Email',
    levelOfStudy: '', // custom field name (e.g. LEADCF1)
    currentQualification: '', // custom field (contact page only)
    preferredCountry: '', // custom field (contact page only)
    message: 'Description',
  },
};
const ZOHO_READY = Boolean(ZOHO.actionUrl);

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
type Status = 'idle' | 'submitting' | 'success' | 'pending' | 'error';

export function ConsultationForm({ extended = false }: { extended?: boolean }) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

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

    if (!ZOHO_READY) {
      setStatus('pending');
      return;
    }

    setStatus('submitting');
    try {
      const body = new URLSearchParams();
      body.append('xnQsjsdp', ZOHO.hidden.xnQsjsdp);
      body.append('xmIwtLD', ZOHO.hidden.xmIwtLD);
      body.append('actionType', ZOHO.hidden.actionType);

      const f = ZOHO.fields;
      if (f.firstName) body.append(f.firstName, form.firstName);
      if (f.lastName) body.append(f.lastName, form.lastName);
      if (f.phone) body.append(f.phone, form.phone);
      if (f.email) body.append(f.email, form.email);
      if (f.levelOfStudy) body.append(f.levelOfStudy, form.levelOfStudy);
      if (f.message) body.append(f.message, form.message);
      if (extended && f.currentQualification) body.append(f.currentQualification, form.currentQualification);
      if (extended && f.preferredCountry) body.append(f.preferredCountry, form.preferredCountry);

      await fetch(ZOHO.actionUrl, { method: 'POST', mode: 'no-cors', body });
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

      {status === 'pending' && (
        <p role="alert" className="rounded-lg bg-gold-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-gold-200">
          Our online form is being finalised. In the meantime, please reach us directly at{' '}
          <a href="mailto:info@studyabroad.lk" className="font-semibold text-brand-700 underline">info@studyabroad.lk</a>{' '}
          or <a href="tel:+94774963373" className="font-semibold text-brand-700 underline">+94 77 496 3373</a>.
        </p>
      )}
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
