import { KeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';

import React from 'react';
import './App.css';

import { AppRouter } from './routes';


function App() {
  return (
    <KeycloakProvider keycloak={keycloak}>
      <div className="App">
        <AppRouter />
      </div>
    </KeycloakProvider>
  );
}

export default App;
