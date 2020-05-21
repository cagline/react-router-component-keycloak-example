import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';


export function PrivateRoute({ component: Component, roles, ...rest }) {
    const [keycloak] = useKeycloak();

    const isAutherized = (roles) => {
        if (keycloak && roles) {
            return roles.some(r => {
                // In keycloak there are two ways of assiging roles to the user 
                // You can assign roles to realm & client 
                // In that case you have to use both scinarios with hasRealmRole & hasResourceRole
                const realm =  keycloak.hasRealmRole(r);
                const resource = keycloak.hasResourceRole(r);
                return realm || resource;
            });
        }
        return false;
    }

    return (
        <Route
            {...rest}
            render={props => {
                return isAutherized(roles)
                    ? <Component {...props} />
                    : <Redirect
                        to={{
                            pathname: '/',
                        }}
                    />
            }

            }
        />
    )
}