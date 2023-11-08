import React, { ChangeEvent } from 'react';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useDebouncedValue } from '@mantine/hooks';

type SearchBarProps = {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ value, setValue, placeholder='Search...' }) => {
  const [debounced] = useDebouncedValue(value, 200);

  return (
    <TextInput
      size="md"
      radius="md"
      className="input-field"
      placeholder={placeholder}
      leftSection={<IconSearch />}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
};

export { SearchBar };
