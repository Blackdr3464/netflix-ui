import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import StartPage from '../pages/StartPage';

const publicRouter = [
    { path: '/', component: StartPage },
    { path: '/login', component: Login },
    { path: '/*', component: NotFound },
];

const priviteRouter = [];

export { publicRouter };
