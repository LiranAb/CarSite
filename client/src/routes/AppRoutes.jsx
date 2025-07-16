import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile.jsx';
import Cars from '../pages/UsersCarNames';
import { ProtectedRoute, PublicRoute } from '../components/RouteGuards';
import CarCatalogPage from "../pages/CarCatalogPage.jsx";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                {
                    path: 'login',
                    element: (
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    ),
                },
                {
                    path: 'register',
                    element: (
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    ),
                },
                {
                    path: 'dashboard',
                    element: (
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: 'cars',
                    element: (
                        <ProtectedRoute>
                            <Cars />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: 'car-search',
                    element: (
                        <ProtectedRoute>
                            <CarCatalogPage />
                        </ProtectedRoute>
                    ),
                },
            ],
        },
    ],
    {
        future: {
            v7_startTransition: true
        }
    }
);

export default router;