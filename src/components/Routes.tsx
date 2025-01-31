import { Route, Routes } from 'react-router-dom';

import Home from '../pages';
import Dashboard from '../pages/dashboard';
import Invoices from '../pages/invoices';
import Signin from '../pages/Signin';
import SignUp from '../pages/SignUp';
import ClientPage from '../pages/ClientPage';
import VerificationSuccessPage from '../pages/verification-success';
import DashboardLayout from './dashboard-layout';
import Settings from '@/pages/settings';

import { routes } from '../lib/routes';

const RoutesFiles = () => {
  return (
    <Routes>
      <Route path={routes.home()} element={<Home />} />
      <Route path={routes.signIn()} element={<Signin />} />
      <Route path={routes.signUp()} element={<SignUp />} />
      <Route path={routes.verified()} element={<VerificationSuccessPage />} />

      <Route element={<DashboardLayout />}>
        <Route path={routes.dashboard()} element={<Dashboard />} />
        <Route path={routes.dashboardInvoice()} element={<Invoices />} />
        <Route path={routes.dashboardClients()} element={<ClientPage />} />
        <Route path={routes.dashboardSettings()} element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default RoutesFiles;
