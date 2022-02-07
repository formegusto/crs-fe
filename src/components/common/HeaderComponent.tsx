import {
  Box,
  IconButton,
  Text,
  useColorMode,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { ChevronLeftIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import AlertButton from "./AlertButton";
import { useLocation, useNavigate } from "react-router-dom";
import { moveRightToLeft } from "../../animations/move";

function Icons() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Box
      display="flex"
      sx={{
        "*:not(:last-child)": {
          margin: "0 4px 0 0",
        },
      }}
    >
      <AlertButton />
      {colorMode === "light" ? (
        <IconButton
          color="modetext"
          fontSize="h3"
          aria-label="change-mode-dark"
          bgColor="transparent"
          onClick={() => setColorMode("dark")}
          icon={<MoonIcon />}
        />
      ) : (
        <IconButton
          color="modetext"
          fontSize="h3"
          aria-label="change-mode-white"
          bgColor="transparent"
          onClick={() => setColorMode("light")}
          icon={<SunIcon />}
        />
      )}
    </Box>
  );
}

function HeaderComponent() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const prefersReducedMotion = usePrefersReducedMotion();

  const backBtnAni = prefersReducedMotion
    ? undefined
    : `${moveRightToLeft} .3s linear forwards`;

  return (
    <Box
      display="flex"
      alignItems="center"
      height="100px"
      justifyContent="space-between"
      sx={{
        padding: "0 40px 0",
        boxSizing: "border-box",
      }}
    >
      {pathname === "/" ? (
        <Text fontSize="h4" fontWeight="bold" color="modern.200">
          Contract Recomment System
        </Text>
      ) : (
        <IconButton
          color="modern.200"
          fontSize="h2"
          aria-label="back-btn"
          bgColor="transparent"
          onClick={() => navigate("/")}
          animation={backBtnAni}
          icon={<ChevronLeftIcon />}
        />
      )}

      <Icons />
    </Box>
  );
}

export default HeaderComponent;
