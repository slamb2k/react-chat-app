import { Navigate, Outlet } from "react-router-dom";
import { Stack } from '@mui/material';
import SideBar from "./SideBar";
//import HeaderImage from "../../assets/Images/headerImage.png";

const isAuthenticated = true;

const DashboardLayout = () => {

  if (!isAuthenticated) {
    return <Navigate to='/auth/login' />;
  }

  return (
    <Stack style={{ width: '100%', height: '100%' }}>
      {/* <div>
        <img src={HeaderImage} alt={'Logo icon'} style={{ width: '100%', height: '15vh', objectFit: 'cover' }} />
      </div> */}
      <Stack direction='row' style={{ width: '100%', height: '100%' }}>
        {/* SideBar */}
        <SideBar />
        <Outlet />
      </Stack>
    </Stack>

  );
};

export default DashboardLayout;
