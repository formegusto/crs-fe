import { AddIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text } from "@chakra-ui/react";

function MainComponent() {
  return (
    <Box
      flex="1"
      bgColor="modebox"
      margin="16px 40px 0"
      padding="0 28px 0"
      borderRadius="16px"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="60px"
      >
        <Text fontSize="h5" fontWeight="bold" color="modetext">
          최근 보고서
        </Text>
        <IconButton
          color="modetext"
          bgColor="transparent"
          aria-label="new-report"
          icon={<AddIcon />}
        />
      </Box>
    </Box>
  );
}

export default MainComponent;
