import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Test from '../pages/test/Test';

import Layout from './Layout';

const Home = React.lazy(() => import('../pages/home/Home'));
const Booking = React.lazy(() => import('../pages/booking/Booking'));
const Services = React.lazy(() => import('../pages/services/Services'));
const NoPage = React.lazy(() => import('../pages/nopage/NoPage'));
const Form = React.lazy(() => import('../pages/Form/Form'));
const Profile = React.lazy(() => import('../pages/profile/Profile'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="form" element={<Form />} />
          <Route path="services" element={<Services />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
