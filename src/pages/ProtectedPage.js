import { useKeycloak } from '@react-keycloak/web';
import React from 'react';

const ProtectedPage = () => {
  const [keycloak, initialized] = useKeycloak();

  return (
    initialized ?
      <div>
        <h1>Protected Page</h1>
        {!!keycloak.authenticated && <pre className="json-wrapper">{JSON.stringify(keycloak, undefined, 2)}</pre>}
        {keycloak && !keycloak.authenticated && <p>need to login</p>}
      </div>
      : <div>Loadding keycloak !!!!!!!!!</div>
  )
}

export default ProtectedPage