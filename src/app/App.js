import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';

const Home = React.lazy(() => import('../pages/home/Home'));
const Booking = React.lazy(() => import('../pages/booking/Booking'));
const Booking2 = React.lazy(() => import('../pages/booking2/Booking2'));
const Services = React.lazy(() => import('../pages/services/Services'));
const NoPage = React.lazy(() => import('../pages/nopage/NoPage'));
const Form = React.lazy(() => import('../pages/Form/Form'));

// import Login from '../pages/login/Login';
// import Test from '../pages/test/Test';
// import Queue from '../pages/admin/queue/Queue';
// import Sumarize from '../pages/admin/sumarize/Sumarize';

// import CommissionsInfo from '../pages/admin/info/commissions/Commissions';
// import PromotionsInfo from '../pages/admin/info/promotions/Promotions';
// import ServicesInfo from '../pages/admin/info/services/Services';

// import Members from '../pages/admin/manage/members/Members';
// import Customers from '../pages/admin/manage/customers/Customers';
// import Employees from '../pages/admin/manage/employees/Employees';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="booking2" element={<Booking2 />} />
          <Route path="form" element={<Form />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<NoPage />} />

          {/* <Route path="admin/">
            <Route index element={<Queue />} />
            <Route path="queues" element={<Queue />} />
            <Route path="sumarize" element={<Sumarize />} />
            <Route path="*" element={<NoPage />} />

            <Route path="info/">
              <Route index element={<ServicesInfo />} />
              <Route path="promotions" element={<PromotionsInfo />} />
              <Route path="services" element={<ServicesInfo />} />
              <Route path="commissions" element={<CommissionsInfo />} />
              <Route path="*" element={<NoPage />} />
            </Route>

            <Route path="manage/">
              <Route index element={<Customers />} />
              <Route path="customers" element={<Customers />} />
              <Route path="employees" element={<Employees />} />
              <Route path="members" element={<Members />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
