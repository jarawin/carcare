import { Route } from 'react-router-dom';

import Layout from '../layout/UserLayout';
import Home from '../../pages/Home';
import NoPage from '../../pages/NoPage';

function AdminRoute() {
     return (
          <Route path="/admin" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="*" element={<NoPage />} />
          </Route>
     )
}

export default AdminRoute