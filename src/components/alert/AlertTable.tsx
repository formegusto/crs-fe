import { Flex } from "@chakra-ui/react";
import { ConnectedProps } from "react-redux";
import UIConnector from "../../store/ui/connector";
import AlertItem from "./AlertItem";

type Props = ConnectedProps<typeof UIConnector>;

function AlertTable({ alerts }: Props) {
  return (
    <Flex direction="column">
      {alerts.map((alert) => (
        <AlertItem message={alert.message} />
      ))}
      <AlertItem isLink />
      <AlertItem />
      <AlertItem />
      <AlertItem />
    </Flex>
  );
}

export default UIConnector(AlertTable);
