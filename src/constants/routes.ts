
export const ROUTES = {
    DASHBOARD: {
        key: 'dashboard',
        name: 'DashBoard',
        path: '/',
        exact: true,
        isPrivate: false,
    },
    LOGIN: {
        key: 'login',
        name: 'Login',
        path: '/login',
        exact: false,
        isPrivate: false,
    },
    GENERAL: {
        key: 'general',
        name: 'General',
        path: '/:userId/general',
        exact: true,
        isPrivate: false,
    }
}