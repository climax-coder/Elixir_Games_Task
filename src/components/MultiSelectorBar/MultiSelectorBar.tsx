import React from 'react';
import { MultiSelect } from '@mantine/core';

type MultiSelectorBarProps = {
  data: string[];
  value: string[];
  setValue: (newValue: string[]) => void;
  placeholder?: string;
};

const MultiSelectorBar: React.FC<MultiSelectorBarProps> = ({ data, value, setValue, placeholder="Select..." }) => {

  const handleNationalitiesChange = (newNationalities: string[]) => {
    setValue(newNationalities);
  };

  return (
    <MultiSelect
      data={data}
      value={value}
      onChange={handleNationalitiesChange}
      searchable
      placeholder={placeholder}
      size="md"
      radius="md"
      className="input-field"
      checkIconPosition="right"
    />
  );
};

export { MultiSelectorBar };
