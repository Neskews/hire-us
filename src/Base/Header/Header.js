import React from 'react';
import { Layout } from "../Layout/Layout";
import { SecondaryButton } from "../Components/Button/Button";
import "./Header.scss";

export const Header = ({ 
  onGoToSearch,
  onGoToLogin 
}) => {
  return (
    <header>
      <Layout>
        <div onClick={onGoToSearch}>
          Buche einen Musiker
        </div>
        <SecondaryButton
          label="Login"
          onClick={onGoToLogin}
        />
      </Layout>
    </header>
  );
}