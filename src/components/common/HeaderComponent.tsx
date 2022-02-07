import { Box, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import AlertButton from "./AlertButton";

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
  return (
    <Box
      display="flex"
      alignItems="center"
      height="70px"
      justifyContent="space-between"
      sx={{
        padding: "0 40px 0",
        boxSizing: "border-box",
      }}
    >
      <Text fontSize="h4" fontWeight="bold" color="modern.200">
        Contract Recomment System
      </Text>
      <Icons />
    </Box>
  );
}

export default HeaderComponent;
