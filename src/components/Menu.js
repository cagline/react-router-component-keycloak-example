import { withKeycloak } from '@react-keycloak/web';
import React from 'react';
import AuthorizedFunction from '../utilities/AuthorizedFunction';

const Menu = ({ keycloak, keycloakInitialized }) => {

    return (
        <ul>
            <li><a href="/">Home Page </a></li>
            {AuthorizedFunction(['RealmAdmin']) && <li><a href="/protected">Protected Page</a></li>}

            {keycloak && !keycloak.authenticated &&
                <li><a className="btn-link" onClick={() => keycloak.login()}>Login</a></li>
            }

            {keycloak && keycloak.authenticated &&
                <li>
                    <a className="btn-link" onClick={() => keycloak.logout()}>Logout ({
                        keycloak.tokenParsed.preferred_username
                    })</a>
                </li>
            }

        </ul>
    )
}

export default withKeycloak(Menu)