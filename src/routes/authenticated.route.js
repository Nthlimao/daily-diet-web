import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../auth';

export const AuthenticatedRoute = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route 
            {...rest}
            render={props => {
                if(!auth.isLoggedIn()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect to={{
                            pathname: "/dashboard",
                            state: {
                                from: props.location
                            }
                        }}/>
                    );
                }
            }}
        />
    );
}