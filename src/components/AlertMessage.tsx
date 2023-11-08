import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

type AlertMessageProps = {
  color?: string,
  title: string,
  message: string,
};

const AlertMessage: React.FC<AlertMessageProps> = ({ color="blue", title, message}) => {
  const icon = <IconInfoCircle />;
  return (
    <Alert variant="light" color={color} title={title} icon={icon}>
      {message}
    </Alert>
  );
}

export {AlertMessage};