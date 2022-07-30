import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserLayout from './layout/UserLayout';
import AdminLayout from './layout/AdminLayout';
import Home from '../pages/home/Home';
import NoPage from '../pages/nopage/NoPage';
import Booking from '../pages/booking/Booking';
import Login from '../pages/login/Login';
import Test from '../pages/test/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="test" element={<Test />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        <Route path="/admin/" element={<AdminLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
