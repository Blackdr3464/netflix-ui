import Home from '../pages/Home';
import Login from '../pages/Login';
import Member from '../pages/Member';
import NotFound from '../pages/NotFound';
import StartPage from '../pages/StartPage';

const publicRouter = [
    { path: '/', component: StartPage },
    { path: '/login', component: Login },
    { path: '/member', component: Member },
    { path: '/home', component: Home },
    { path: '/*', component: NotFound },
];

const priviteRouter = [];

export { publicRouter };
