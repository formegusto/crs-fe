import { Box, Text } from "@chakra-ui/react";

function HeaderComponent() {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        height: "70px",
        padding: "0 40px 0",
        boxSizing: "border-box",
      }}
    >
      <Text fontSize="h4" fontWeight="bold" color="modern.200">
        Contract Recomment System
      </Text>
    </Box>
  );
}

export default HeaderComponent;
