import { Route } from 'react-router-dom';

import Layout from '../layout/UserLayout';
import Home from '../../pages/Home';
import Booking from '../../pages/Booking';
import NoPage from '../../pages/NoPage';

function UserRoute() {
     return (
          <Route Route path="/" element={< Layout />}>
               <Route index element={<Home />} />
               <Route path="booking" element={<Booking />} />
               <Route path="*" element={<NoPage />} />
          </Route >
     )
}

export default UserRoute