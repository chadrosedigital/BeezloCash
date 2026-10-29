import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Beezlo Cash | Find your next good deal', description: 'Discover a little more for a little less. Explore the Beezlo Cash customer demo.', robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-ZA"><body>{children}</body></html>; }
