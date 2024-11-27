'use client'

import { ClientLayout } from "./client-layout";
import { RootWrapper } from './root-wrapper';

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return (
    <RootWrapper>
      <ClientLayout>{children}</ClientLayout>
    </RootWrapper>
  );
}
