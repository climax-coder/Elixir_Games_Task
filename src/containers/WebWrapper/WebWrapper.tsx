import React, { ReactNode } from 'react';
import ElixirGamesNavBar from '../ElixirGamesNavBar/ElixirGamesNavBar';
import ElixirGamesFooter from '../ElixirGamesFooter/ElixirGamesFooter';

interface WebWrapperProps {
  children: ReactNode;
}

const WebWrapper: React.FC<WebWrapperProps> = ({ children }) => {
  return (
    <>
      <ElixirGamesNavBar />
      <main>{children}</main>
      <ElixirGamesFooter />
    </>
  );
};

export default WebWrapper;