import { Flex } from "@chakra-ui/react";
import AlertItem from "./AlertItem";

function AlertTable() {
  return (
    <Flex direction="column">
      <AlertItem isLink />
      <AlertItem />
      <AlertItem />
      <AlertItem />
    </Flex>
  );
}

export default AlertTable;
