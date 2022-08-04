import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRouter } from './listRouter';

const Router = () => {
    return (
        <Routes>
            {publicRouter.map((item, idx) => {
                const Page = item.component;
                return <Route key={idx} path={item.path} element={<Page />} />;
            })}
        </Routes>
    );
};

export default Router;
