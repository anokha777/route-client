import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Regitration from '../components/Regitration/Regitration';

// const Home = lazy(() => import('../components/Home1/Home'));
// const Login = lazy(() => import('../components/Login/Login'));

function ApplicationRouter() {
  return (
    <Suspense fallback={<Spin spinning></Spin>}>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Regitration />} />
        
        <Route path='*' element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default ApplicationRouter;
