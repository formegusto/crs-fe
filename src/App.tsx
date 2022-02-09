// import { useToast } from "@chakra-ui/react";
// import React from "react";
import { Route, Routes } from "react-router-dom";
import RootPage from "./pages";
import MainPage from "./pages/MainPage";
import ReportPage from "./pages/ReportPage";

function App() {
  // const toast = useToast();

  // React.useEffect(() => {
  //   toast({
  //     position: "top",
  //     duration: 150000000,
  //     isClosable: true,
  //     description: "새 변경사항을 확인해주세요.",
  //   });
  // }, [toast]);

  return (
    <Routes>
      <Route path="/" element={<RootPage />}>
        <Route index element={<MainPage />} />
        <Route path="/report" element={<ReportPage />} />
      </Route>
    </Routes>
  );
}

export default App;
