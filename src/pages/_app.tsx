import React, { useState } from 'react';
import '@mantine/core/styles.css';
import '@/styles/style.css';

import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import { AppContext } from './appContext';
import WebWrapper from '@/containers/WebWrapper/WebWrapper';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark');

  return (
    <AppContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider forceColorScheme={colorScheme}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <WebWrapper>
              <Component {...pageProps} />
            </WebWrapper>
          </RecoilRoot>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </MantineProvider>
    </AppContext.Provider>
  );
}