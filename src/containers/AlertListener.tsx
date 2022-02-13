import { useToast } from "@chakra-ui/react";
import React from "react";
import { ConnectedProps } from "react-redux";
import UIConnector from "../store/ui/connector";

type Props = ConnectedProps<typeof UIConnector>;

function AlertListener({ alert }: Props) {
  const toast = useToast();

  React.useEffect(() => {
    if (alert) {
      toast({
        position: "top",
        duration: 6000,
        isClosable: true,
        description: "새 변경사항을 확인해주세요.",
      });
    }
  }, [alert, toast]);

  return <></>;
}

export default UIConnector(AlertListener);
