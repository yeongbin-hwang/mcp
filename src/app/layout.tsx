'use client';

import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}