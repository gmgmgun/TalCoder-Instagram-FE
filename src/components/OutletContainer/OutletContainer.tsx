import { Outlet } from 'react-router-dom';
import TopNav from '../Nav/Nav';

const OutletContainer = () => {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
};
export default OutletContainer;
