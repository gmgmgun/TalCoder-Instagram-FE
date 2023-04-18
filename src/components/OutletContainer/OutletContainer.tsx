import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';

const OutletContainer = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
export default OutletContainer;
