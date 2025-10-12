import { PropsWithChildren } from 'react';

import { NavigationHeader } from '@widgets/header/ui';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <NavigationHeader />
      <div className="pt-16">{children}</div>
    </>
  );
}
