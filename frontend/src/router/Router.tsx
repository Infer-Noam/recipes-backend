import type { FC } from 'react';
import { Route, type RouteProps, Routes } from 'react-router-dom';

type RouterProps = {
  routes: RouteProps[];
};

const Router: FC<RouterProps> = ({ routes }) => (
  <Routes>
    {routes.map(({ element, ...route }, index) => (
      <Route key={index} element={element} {...route} />
    ))}
  </Routes>
);

export default Router;