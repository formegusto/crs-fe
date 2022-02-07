import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import FooterComponent from "../components/common/FooterComponent";
import HeaderComponent from "../components/common/HeaderComponent";

function RootPage() {
  return (
    <Box display="flex" flexDirection="column" width="1060px" height="760px">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </Box>
  );
}

export default RootPage;
