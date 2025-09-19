import Navigation from '@/components/layouts/navigation';
import { PropsWithChildren } from 'react';

export default function NavigationLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation />
      <main className="pt-16">{children}</main>
    </>
  );
}
