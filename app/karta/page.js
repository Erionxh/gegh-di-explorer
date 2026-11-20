import { redirect } from 'next/navigation';
export default function Page({ searchParams }) {
  const q = new URLSearchParams(searchParams || {}).toString();
  redirect(`/kartolina${q ? `?${q}` : ''}`);
}
