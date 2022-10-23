import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Login from '../pages/login/Login';

const Home = React.lazy(() => import('../pages/home/Home'));
const Booking = React.lazy(() => import('../pages/booking/Booking'));
const NoPage = React.lazy(() => import('../pages/nopage/NoPage'));
const Profile = React.lazy(() => import('../pages/profile/Profile'));
const Queue = React.lazy(() => import('../pages/queue/Queue'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="queue" element={<Queue />} />
        </Route>

        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
