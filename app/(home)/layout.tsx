import { PropsWithChildren } from 'react';

import { NavigationHeader, PageLayout } from '@widgets/common/ui';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <NavigationHeader />
      <PageLayout>{children}</PageLayout>
    </>
  );
}
