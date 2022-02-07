import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { ConnectedProps } from "react-redux";
import UIConnector from "../../store/ui/connector";

type Props = ConnectedProps<typeof UIConnector>;
function RegistDrawer({ drawer, hideDrawer }: Props) {
  return (
    <Drawer
      placement="right"
      isOpen={
        drawer !== undefined && drawer !== null && drawer.type === "regist"
      }
      onClose={hideDrawer}
      size="sm"
    >
      <DrawerOverlay />
      <DrawerContent bg="modebox">
        <Box padding="8px">
          <IconButton
            fontSize="h6"
            color="modetext"
            bg="transparent"
            aria-label="close-alert"
            onClick={hideDrawer}
            icon={<CloseIcon />}
          />
        </Box>
        <Text textStyle="h4" padding="8px 20px 16px">
          시뮬레이션 등록
        </Text>
      </DrawerContent>
    </Drawer>
  );
}

export default UIConnector(RegistDrawer);
