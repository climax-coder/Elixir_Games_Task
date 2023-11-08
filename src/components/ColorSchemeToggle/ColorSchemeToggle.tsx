'use client';

import React from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconSunHigh, IconMoon } from '@tabler/icons-react';
import { useAppContext } from '@/pages/appContext';

function ColorSchemeToggle() {
  const appContext = useAppContext();
  const dark = appContext?.colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => appContext?.onChange(dark ? 'light' : 'dark')}
      // title="Toggle color scheme"
    >
      {dark ? (
        <Tooltip label="Light mode">
          <IconSunHigh style={{ width: 30, height: 30 }} />
        </Tooltip>
      ) : (
        <Tooltip label="Dark mode">
          <IconMoon style={{ width: 30, height: 30 }} />
        </Tooltip>
      )}
    </ActionIcon>
  );
}

export { ColorSchemeToggle } ;