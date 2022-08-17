import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserLayout from './layout/UserLayout';
import AdminLayout from './layout/AdminLayout';
import Home from '../pages/home/Home';
import NoPage from '../pages/nopage/NoPage';
import Booking from '../pages/booking/Booking';
import Login from '../pages/login/Login';
import Test from '../pages/test/Test';
import Services from '../pages/services/Services';
import ServicesAdmin from '../pages/admin/services/Services';
import Users from '../pages/admin/users/Users';
import Queue from '../pages/admin/queue/Queue';
import Events from '../pages/admin/events/Events';
import Sumarize from '../pages/admin/sumarize/Sumarize';

import CommissionsInfo from '../pages/admin/info/commissions/Commissions';
import PromotionsInfo from '../pages/admin/info/promotions/Promotions';
import ServicesInfo from '../pages/admin/info/services/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="services" element={<Services />} />
          <Route path="login" element={<Login />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        <Route path="/admin/" element={<UserLayout />}>
          <Route index element={<Queue />} />
          <Route path="queue" element={<Queue />} />
          <Route path="sumarize" element={<Sumarize />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        <Route path="/admin/info/" element={<UserLayout />}>
          <Route index element={<ServicesInfo />} />
          <Route path="promotions" element={<PromotionsInfo />} />
          <Route path="services" element={<ServicesInfo />} />
          <Route path="commissions" element={<CommissionsInfo />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
