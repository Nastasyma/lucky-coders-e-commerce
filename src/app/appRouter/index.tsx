import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import LoginForm from '../../features/authentication/login/ui/LoginForm';
import ErrorPage from '../../pages/error';
import RoutesName from '../../shared/routing';
import RegistrationPage from '../../pages/registration';
import MainPage from '../../pages/main';
import BaseLayout from '../layouts/baseLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={BaseLayout} errorElement={<ErrorPage />}>
      <Route index element={<MainPage />} />
      <Route path={RoutesName.main} element={<MainPage />} />
      <Route path={RoutesName.login} element={<LoginForm />} />
      <Route path={RoutesName.registration} element={<RegistrationPage />} />
    </Route>,
  ),
);

export default router;
