import React from 'react';
import {Route, Routes as ReactRouterRoutes} from 'react-router-dom'
import Home from '../pages/home/Home.page';
import SignIn from '../pages/signIn/SignIn.page';
import SignUp from '../pages/signUp/SignUp.page';


export const pageRoutes = {
    home: {
        id: 1,
        path: "/",
        element: <Home />
    },
    signIn: {
      id: 2,
      path: "/signin",
      element: <SignIn />
    },
    signUp: {
        id: 2,
        path: "/signup",
        element: <SignUp />,
      }
  }

const Routes = () => {
    return (
        <div>
            <ReactRouterRoutes>
                {Object.values(pageRoutes).map(({id, path, element}) => (
                    <Route key={id} path={path} element={element} />
                ))}
            </ReactRouterRoutes>
            
        </div>
    );
};

export default Routes;