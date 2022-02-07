import { Box } from "@chakra-ui/react";
import FooterComponent from "./components/common/FooterComponent";
import HeaderComponent from "./components/common/HeaderComponent";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <Box display="flex" flexDirection="column" width="1060px" height="720px">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </Box>
  );
}

export default App;
