import { BellIcon } from "@chakra-ui/icons";
import { Box, IconButton, IconButtonProps } from "@chakra-ui/react";

function AlertButton(props: IconButtonProps) {
  return (
    <Box width="40px" height="40px" position="relative">
      <IconButton
        position="absolute"
        color="modern.200"
        fontSize="h3"
        bgColor="transparent"
        icon={<BellIcon />}
        {...props}
      />
      <Box
        position="absolute"
        top="6px"
        right="8px"
        width="6px"
        height="6px"
        borderRadius="100%"
        bgColor="graph.red"
      />
    </Box>
  );
}

export default AlertButton;
