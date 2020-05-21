import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import AuthrizedElement from '../components/AuthrizedElement';

const HomePage = () => {
  const [keycloak, initialized] = useKeycloak();

  return (
    <div>
      <h1>Home Page</h1>
       
      <strong>Anyone can access this page</strong>
      <h2>RealmAdmin User Role can access bellow button</h2>
      <small>button gose here</small>
      <AuthrizedElement roles={['RealmAdmin']}><button>Realm Admin Acction Button</button></AuthrizedElement>

      <hr/>

      <h2>ClientAdmin User Role can access bellow button</h2>
      <small>button gose here</small>
      <AuthrizedElement roles={['ClientAdmin']}><button>Client Admin Acction Button</button></AuthrizedElement>
      
      <hr/>

      {initialized ?
        keycloak.authenticated && <pre >{JSON.stringify(keycloak, undefined, 2)}</pre>
        : <h2>keycloak initializing ....!!!!</h2>
      }
    </div>
  )
}
export default HomePage