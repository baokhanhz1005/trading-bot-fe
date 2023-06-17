
export const ROUTES = {
    LOGIN: {
        key: 'login',
        name: 'Login',
        path: '/login',
        exact: true,
        isPrivate: false,
    },
    DASHBOARD: {
        key: 'dashboard',
        name: 'DashBoard',
        path: '/',
        exact: true,
        isPrivate: false,
    },
    GENERAL: {
        key: 'general',
        name: 'General',
        path: '/1200001/general',
        exact: false,
        isPrivate: false,
    }
}