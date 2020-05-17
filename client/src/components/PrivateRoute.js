import { Route, Redirect } from 'react-router-dom';
import React from 'react';


export const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route 
    {...rest} 
    render={props => 
        localStorage.getItem("token") ? (
        <Component {...props} /> 
        ) : (
            <Redirect to='/login' />
        )
    }
    />

)
