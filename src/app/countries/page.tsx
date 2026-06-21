import { redirect } from 'next/navigation';

export default function Countries() {
  redirect('/country-details?country=overview');
}
